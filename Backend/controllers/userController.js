const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const uploadFiles = require("../utils/uploadFiles");

const register = async (req, res) => {
	try {
		const { fullName, email, phoneNumber, password, role } = req.body;

		if (!fullName || !email || !phoneNumber || !password || !role) {
			return res.status(400).json({
				message: "Please enter all the required fields",
				success: false,
			});
		}

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res
				.status(400)
				.json({ message: "User already exists", success: false });
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		await User.create({
			fullName,
			email,
			phoneNumber,
			password: hashedPassword,
			role,
		});

		return res.status(201).json({
			message: "Account created successfully.",
			success: true,
		});
	} catch (error) {
		return res.status(404).json({ message: error.message, success: false });
	}
};

const login = async (req, res) => {
	try {
		const { email, password, role } = req.body;

		if (!email || !password || !role) {
			return res.status(400).json({
				message: "Please enter all the required fields",
				success: false,
			});
		}

		let user = await User.findOne({ email });

		if (!user) {
			return res.status(404).json({
				message: "User not found",
				success: false,
			});
		}

		if (user.role !== role) {
			return res.status(401).json({
				message: "Unauthorized access",
				success: false,
			});
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(401).json({
				message: "Invalid credentials",
				success: false,
			});
		}

		const tokenData = {
			userId: user._id,
		};
		const token = await jwt.sign({ tokenData }, process.env.JWT_SECRET, {
			expiresIn: "1d",
		});

		user = {
			_id: user._id,
			fullName: user.fullName,
			email: user.email,
			phoneNumber: user.phoneNumber,
			role: user.role,
			profile: user.profile,
		};

		return res
			.status(200)
			.cookie("token", token, {
				maxAge: 24 * 60 * 60 * 1000,
				httpOnly: true,
				sameSite: "strict",
			})
			.json({
				message: `Welcome back, ${user.fullName}`,
				user: { ...user },
				success: true,
			});
	} catch (error) {
		return res.status(404).json({
			message: error.message,
			success: false,
		});
	}
};

const logout = async (req, res) => {
	try {
		return res
			.status(200)
			.cookie("token", "", {
				maxAge: 0,
			})
			.json({
				message: "User Logout Successfully.",
				success: true,
			});
	} catch (error) {
		return res.status(404).json({
			message: error.message,
			success: false,
		});
	}
};

const updateProfile = async (req, res) => {
	const { fullName, email, phoneNumber, bio, skills } = req.body;
	try {
		// Middleware provide userId
		const userId = req.userId;

		let user = await User.findById(userId);

		if (!user) {
			return res.status(400).json({
				message: "User not found!",
				success: false,
			});
		}

		// update the user value
		if (fullName) user.fullName = fullName;
		if (email) user.email = email;
		if (phoneNumber) user.phoneNumber = phoneNumber;
		if (bio) user.profile.bio = bio;
		if (skills) {
			const skillsArray = skills.trim().split(",");
			user.profile.skills = skillsArray;
		}

		if (req.files) {
			const result = await uploadFiles(req.files);

			for (let i = 0; i < result.length; i++) {
				if (
					result[i].format === "png" ||
					result[i].format === "jpg" ||
					result[i].format === "jpeg"
				) {
					user.profile.profilePhoto = result[i].secure_url;
				}
				if (result[i].format === "pdf") {
					user.profile.resume = result[i].secure_url;
				}
			}
		}
		await user.save();

		return res.status(200).json({
			message: "Profile updated successfully",
			success: true,
			user,
		});
	} catch (error) {
		return res.status(404).json({
			message: error.message,
			success: false,
		});
	}
};

module.exports = {
	register,
	login,
	logout,
	updateProfile,
};
