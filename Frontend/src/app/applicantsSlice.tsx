import { createSlice } from "@reduxjs/toolkit";

const applicantsSlice = createSlice({
	name: "applicants",
	initialState: {
		applicants: [],
	},
	reducers: {
		setApplicants: (state, action) => {
			state.applicants = action.payload;
		},
		removeApplicants: (state) => {
			state.applicants = [];
		},

		updateStatus: (state, action) => {
			const { id, status } = action.payload;
			const applicant: any = state.applicants.find(
				(item: any) => item._id === id
			);
			if (applicant) {
				applicant.status = status;
			}
			return state;
		},
	},
});

export const { setApplicants, removeApplicants, updateStatus } =
	applicantsSlice.actions;
export default applicantsSlice.reducer;
