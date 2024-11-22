const User = require("../models/userModel");
const isAuthorized = async (req, res, next) => {
	try {
		const userId = req.userId;
		const user = await User.findById(userId);
		if (!user) {
			return res.status(404).json({
				message: "User not found!",
				success: false,
			});
		}
		if (user.role !== "recruiter") {
			return res.status(401).json({
				message: "Unauthorized Access!",
				success: false,
			});
		}
		next();
	} catch (error) {
		return res.status(404).json({
			message: error.message || "something went wrong!",
			success: false,
		});
	}
};

module.exports = isAuthorized;
