const express = require("express");
const isAuthentication = require("../middleware/isAuthentication");
const {
	register,
	login,
	logout,
	updateProfile,
} = require("../controllers/userController");
const { multipleUpload } = require("../middleware/multer");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router
	.route("/profile/update")
	.patch(isAuthentication, multipleUpload, updateProfile);
router.route("/logout").get(isAuthentication, logout);

module.exports = router;
