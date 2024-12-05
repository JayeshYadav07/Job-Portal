import { createSlice } from "@reduxjs/toolkit";

const companiesSlice = createSlice({
	name: "companies",
	initialState: {
		singleCompany: null,
		companies: [],
	},
	reducers: {
		setSingleCompany: (state, action) => {
			state.singleCompany = action.payload;
		},
		setCompanies: (state, action) => {
			state.companies = action.payload;
		},
	},
});

export const { setCompanies, setSingleCompany } = companiesSlice.actions;
export default companiesSlice.reducer;
