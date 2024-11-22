const Application = require("../models/applicationModel");
const Job = require("../models/jobModel");

const applyJob = async (req, res) => {
	try {
		const userId = req.userId;
		const jobId = req.params.id;

		if (!jobId) {
			return res.status(404).json({
				message: "Job id is required!",
				success: false,
			});
		}

		const job = await Job.findById(jobId);

		if (!job) {
			return res.status(404).json({
				message: "Job not found!",
				success: false,
			});
		}

		const isApplied = await Application.findOne({
			job: jobId,
			applicant: userId,
		});

		if (isApplied) {
			return res.status(404).json({
				message: "You have already applied for this job!",
				success: false,
			});
		}

		const newApplication = await Application.create({
			job: jobId,
			applicant: userId,
		});

		job.applications.push(newApplication._id);
		await job.save();

		return res.status(201).json({
			message: "Successfully applied for job.",
			success: true,
		});
	} catch (error) {
		return res.status(404).json({
			message: error.message || "Something went wrong!",
			success: false,
		});
	}
};

const getAppliedJobs = async (req, res) => {
	try {
		const userId = req.userId;
		const applications = await Application.find({
			applicant: userId,
		}).populate({
			path: "job",
			options: {
				sort: { createdAt: -1 },
			},
			populate: {
				path: "companyId",
				options: {
					sort: { createdAt: -1 },
				},
			},
		});

		if (!applications) {
			return res.status(404).json({
				message: "Applications not found!",
				success: false,
			});
		}

		return res.status(200).json({
			message: "Successfully get applications.",
			success: true,
			applications,
		});
	} catch (error) {
		return res.status(404).json({
			message: error.message || "Something went wrong!",
			success: false,
		});
	}
};

const getApplicants = async (req, res) => {
	try {
		const jobId = req.params.id;

		if (!jobId) {
			return res.status(404).json({
				message: "Job id is required!",
				success: false,
			});
		}
		const jobs = await Job.findById(jobId).populate({
			path: "applications",
			options: {
				sort: { createdAt: -1 },
			},
			populate: {
				path: "applicant",
				options: {
					sort: { createdAt: -1 },
				},
			},
		});

		if (!jobs) {
			return res.status(404).json({
				message: "Job not found!",
				success: false,
			});
		}

		return res.status(200).json({
			message: "Successfully get applications.",
			success: true,
			applications: jobs.applications,
		});
	} catch (error) {
		return res.status(404).json({
			message: error.message || "Something went wrong!",
			success: false,
		});
	}
};

const updateStatus = async (req, res) => {
	try {
		const { status } = req.body;
		const applicationId = req.params.id;

		if (!applicationId) {
			return res.status(404).json({
				message: "Application id is required!",
				success: false,
			});
		}

		if (!status) {
			return res.status(404).json({
				message: "Status is required!",
				success: false,
			});
		}

		const application = await Application.findById(applicationId);

		if (!application) {
			return res.status(404).json({
				message: "Application not found!",
				success: false,
			});
		}

		application.status = status;
		await application.save();

		return res.status(200).json({
			message: "Successfully updated application status.",
			success: true,
		});
	} catch (error) {
		return res.status(404).json({
			message: error.message || "Something went wrong!",
			success: false,
		});
	}
};

module.exports = {
	applyJob,
	getAppliedJobs,
	getApplicants,
	updateStatus,
};
