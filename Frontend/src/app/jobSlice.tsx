import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
	name: "job",
	initialState: {
		jobs: [],
		singleJob: null,
	},
	reducers: {
		setJobs: (state, action) => {
			state.jobs = action.payload;
		},
		setSingleJob: (state, action) => {
			state.singleJob = action.payload;
		},
	},
});

export const { setJobs, setSingleJob } = jobSlice.actions;
export default jobSlice.reducer;
