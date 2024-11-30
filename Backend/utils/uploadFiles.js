const DatauriParser = require("datauri/parser");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// Configure Cloudinary
cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUD_API_KEY,
	api_secret: process.env.CLOUD_API_SECRET,
	secure: true,
});

const parser = new DatauriParser();

const uploadFiles = async (files) => {
	const uploads = files.map(async (file) => {
		const dataUri = parser.format(file.originalname, file.buffer);
		return cloudinary.uploader.upload(dataUri.content);
	});

	return Promise.all(uploads);
};

module.exports = uploadFiles;
