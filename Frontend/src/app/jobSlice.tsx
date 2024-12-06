import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
	name: "job",
	initialState: {
		jobs: [],
		singleJob: null,
		adminJobs: [],
		textFilterJob: null,
	},
	reducers: {
		setJobs: (state, action) => {
			state.jobs = action.payload;
		},
		setSingleJob: (state, action) => {
			state.singleJob = action.payload;
		},
		setAdminJobs: (state, action) => {
			state.adminJobs = action.payload;
		},
		setTextFilterJob: (state, action) => {
			state.textFilterJob = action.payload;
		},
	},
});

export const { setJobs, setSingleJob, setAdminJobs, setTextFilterJob } =
	jobSlice.actions;
export default jobSlice.reducer;
