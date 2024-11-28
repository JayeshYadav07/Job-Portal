const multer = require("multer");
const storage = multer.memoryStorage();
const multipleUpload = multer({ storage }).any("files", 2);

module.exports = { multipleUpload };
