const express = require("express");
const isAuthentication = require("../middleware/isAuthentication");
const isAuthorized = require("../middleware/isAuthorized");
const router = express.Router();
const {
	register,
	getCompanies,
	getCompany,
	updateCompany,
} = require("../controllers/companyController");

router.route("/register").post(isAuthentication, isAuthorized, register);
router.route("/get").get(isAuthentication, isAuthorized, getCompanies);
router.route("/get/:id").get(isAuthentication, isAuthorized, getCompany);
router
	.route("/update/:id")
	.patch(isAuthentication, isAuthorized, updateCompany);

module.exports = router;
