const express = require("express");
const {
	applyJob,
	getAppliedJobs,
	getApplicants,
	updateStatus,
} = require("../controllers/applicationController");
const isAuthentication = require("../middleware/isAuthentication");
const isAuthorized = require("../middleware/isAuthorized");

const router = express.Router();

router.route("/apply/:id").post(isAuthentication, applyJob);
router.route("/get").get(isAuthentication, getAppliedJobs);
router
	.route("/getApplicants/:id")
	.get(isAuthentication, isAuthorized, getApplicants);

router.route("/update/:id").patch(isAuthentication, isAuthorized, updateStatus);

module.exports = router;
