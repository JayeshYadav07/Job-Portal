const multer = require("multer");
const storage = multer.memoryStorage();
const multipleUpload = multer({ storage }).any();

module.exports = { multipleUpload };
