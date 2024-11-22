const e = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
		},
		email: {
			type: String,
			unique: true,
		},
		phoneNumber: {
			type: Number,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			enum: ["student", "recruiter"],
		},
		profile: {
			bio: {
				type: String,
			},
			skills: [
				{
					type: String,
				},
			],
			resume: {
				type: String,
			},
			resumeOriginalName: {
				type: String,
			},
			company: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Company",
			},
			profilePhoto: {
				type: String,
				default: "",
			},
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
