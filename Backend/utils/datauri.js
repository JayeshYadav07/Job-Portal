const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const DatauriParser = require("datauri/parser");

function getDataUri(file) {
	const parser = new DatauriParser();
	const extension = path.extname(file.originalname).toString();
	return parser.format(extension, file.buffer);
}

module.exports = getDataUri;
