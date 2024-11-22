const express = require("express");
const isAuthentication = require("../middleware/isAuthentication");
const isAuthorized = require("../middleware/isAuthorized");
const router = express.Router();
const {
	addJob,
	getJobs,
	getJobById,
	getRecruiterJobs,
} = require("../controllers/jobController");

router.route("/get").get(isAuthentication, getJobs);
router.route("/get/:id").get(isAuthentication, getJobById);
router.route("/add").post(isAuthentication, isAuthorized, addJob);
router
	.route("/getRecruiterJobs")
	.get(isAuthentication, isAuthorized, getRecruiterJobs);

module.exports = router;
