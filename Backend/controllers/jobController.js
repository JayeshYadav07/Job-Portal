const Job = require("../models/jobModel");

// role = student
const getJobs = async (req, res) => {
	try {
		const keyword = req.query.keyword || "";
		const query = {
			$or: [
				{ title: { $regex: keyword, $options: "i" } },
				{ description: { $regex: keyword, $options: "i" } },
			],
		};

		// get all latest jobs
		const jobs = await Job.find(query)
			.populate({
				path: "companyId",
			})
			.sort({ createdAt: -1 });

		if (!jobs) {
			return res.status(404).json({
				message: "Jobs not found!",
				success: false,
			});
		}

		return res.status(200).json({
			message: "Successfully get jobs.",
			success: true,
			jobs,
		});
	} catch (error) {
		return res.status(404).json({
			message: error.message || "Something went wrong!",
			success: false,
		});
	}
};

const getJobById = async (req, res) => {
	try {
		const jobId = req.params.id;
		const job = await Job.findById(jobId)
			.populate({
				path: "companyId",
			})
			.populate({
				path: "applications",
			});

		if (!job) {
			return res.status(404).json({
				message: "Job not found!",
				success: false,
			});
		}

		return res.status(200).json({
			message: "Successfully get job.",
			success: true,
			job,
		});
	} catch (error) {
		return res.status(404).json({
			message: error.message || "Something went wrong!",
			success: false,
		});
	}
};

// role = recruiter
const addJob = async (req, res) => {
	try {
		const {
			title,
			description,
			requirements,
			salary,
			experienceLevel,
			location,
			jobType,
			position,
			companyId,
		} = req.body;
		if (
			!title ||
			!description ||
			!requirements ||
			!salary ||
			!experienceLevel ||
			!location ||
			!jobType ||
			!position ||
			!companyId
		) {
			return res.status(404).json({
				message: "Please enter all the required fields",
				success: false,
			});
		}

		const job = await Job.create({
			title,
			description,
			requirements: requirements.split(","),
			salary: Number(salary),
			experienceLevel: Number(experienceLevel),
			location,
			jobType,
			position: Number(position),
			companyId,
			created_by: req.userId,
		});

		return res.status(201).json({
			message: "Successfully created job.",
			success: true,
			job,
		});
	} catch (error) {
		return res.status(404).json({
			message: error.message || "Something went wrong!",
			success: false,
		});
	}
};

const getRecruiterJobs = async (req, res) => {
	try {
		const jobs = await Job.find({ created_by: req.userId });

		if (!jobs) {
			return res.status(404).json({
				message: "Jobs not found!",
				success: false,
			});
		}

		return res.status(200).json({
			message: "Successfully get jobs.",
			success: true,
			jobs,
		});
	} catch (error) {
		return res.status(404).json({
			message: error.message || "Something went wrong!",
			success: false,
		});
	}
};
module.exports = {
	addJob,
	getJobs,
	getJobById,
	getRecruiterJobs,
};
