const Company = require("../models/companyModel");
const uploadFiles = require("../utils/uploadFiles");

const register = async (req, res) => {
	try {
		const { name } = req.body;

		if (!name) {
			return res.status(400).json({
				message: "Company name is required.",
				success: false,
			});
		}

		// isExist
		const isExist = await Company.findOne({ name: name });

		if (isExist) {
			return res.status(404).json({
				message: "Company name already present!",
				success: false,
			});
		}

		// Create new company
		const company = await Company.create({
			name,
			userId: req.userId,
		});

		return res.status(201).json({
			message: "Company register successfully. ",
			success: true,
			company,
		});
	} catch (error) {
		return res.status(404).json({
			message: error.message || "Something went wrong!",
			success: false,
		});
	}
};

const getCompanies = async (req, res) => {
	try {
		const company = await Company.find({ userId: req.userId });
		return res.status(200).json({
			message: "Successfully get company.",
			success: true,
			company,
		});
	} catch (error) {
		return res.status(404).json({
			message: error.message || "Something went wrong!",
			success: false,
		});
	}
};

const getCompany = async (req, res) => {
	try {
		const userId = req.userId;
		const company = await Company.findOne({ _id: req.params.id, userId });

		if (!company) {
			return res.status(404).json({
				message: "Company not found!",
				success: false,
			});
		}

		return res.status(200).json({
			message: "Successfully get company.",
			success: true,
			company,
		});
	} catch (error) {
		return res.status(404).json({
			message: error.message || "Something went wrong!",
			success: false,
		});
	}
};

const updateCompany = async (req, res) => {
	try {
		const { name, description, website, location } = req.body;
		const updateData = {};
		if (name) updateData.name = name;
		if (description) updateData.description = description;
		if (website) updateData.website = website;
		if (location) updateData.location = location;

		if (req.files) {
			const result = await uploadFiles(req.files);
			updateData.logo = result[0].secure_url;
		}

		const company = await Company.findOneAndUpdate(
			{ _id: req.params.id, userId: req.userId },
			updateData,
			{ new: true }
		);

		if (!company) {
			return res.status(400).json({
				message: "Company not found!",
				success: false,
			});
		}

		return res.status(200).json({
			message: "Successfully updated company.",
			success: true,
			company,
		});
	} catch (error) {
		return res.status(400).json({
			message: error.message || "Something went wrong!",
			success: false,
		});
	}
};

module.exports = {
	register,
	getCompanies,
	getCompany,
	updateCompany,
};
