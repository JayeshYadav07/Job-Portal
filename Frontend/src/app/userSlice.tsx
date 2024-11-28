import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
	name: "user",
	initialState: {
		user: null,
		loading: false,
	},
	reducers: {
		startLoading: (state) => {
			state.loading = true;
		},
		stopLoading: (state) => {
			state.loading = false;
		},
		setUser: (state, action) => {
			state.user = action.payload;
		},
		removeUser: (state) => {
			state.user = null;
			state.loading = false;
		},
	},
});

export const { startLoading, stopLoading, setUser, removeUser } = user.actions;

export default user.reducer;
