const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./utils/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3000;
const userRoute = require("./routes/userRoute");
const companyRoute = require("./routes/companyRoute");
const jobRoute = require("./routes/jobRoute");
const applicationRoute = require("./routes/applicationRoute");

const app = express();
const corsOptions = {
	origin: process.env.CORS_ORIGIN.split(","),
	credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.listen(PORT, () => {
	connectDB();
	console.log(`Server is running on port ${PORT}`);
});
