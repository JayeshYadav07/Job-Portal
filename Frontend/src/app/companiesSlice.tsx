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
		removeCompanies: (state) => {
			state.companies = [];
			state.singleCompany = null;
		},
	},
});

export const { setCompanies, setSingleCompany, removeCompanies } =
	companiesSlice.actions;
export default companiesSlice.reducer;
