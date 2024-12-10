import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
	name: "job",
	initialState: {
		jobs: [],
		singleJob: null,
		adminJobs: [],
		textFilterJob: "",
		searchQuery: "",
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
		setSearchQuery: (state, action) => {
			state.searchQuery = action.payload;
		},
	},
});

export const {
	setJobs,
	setSingleJob,
	setAdminJobs,
	setTextFilterJob,
	setSearchQuery,
} = jobSlice.actions;
export default jobSlice.reducer;
