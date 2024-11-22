const jwt = require("jsonwebtoken");
const isAuthentication = async (req, res, next) => {
	try {
		const { token } = req.cookies;
		if (!token) {
			return res.status(401).json({
				message: "Unauthorized Access!",
				success: false,
			});
		}

		// verify token
		const decode = await jwt.verify(token, process.env.JWT_SECRET);
		req.userId = decode.tokenData.userId;
		next();
	} catch (error) {
		return res.status(401).json({
			message: error.message || "something went wrong!",
			success: false,
		});
	}
};

module.exports = isAuthentication;
