import { createSlice } from '@reduxjs/toolkit';
import { editProfile, login, signup } from 'Redux/Thunk';

const initialState = {
	user: JSON.parse(localStorage.getItem('user')) || null,
	token: localStorage.getItem('token') || null,
	isLoading: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: {
		[login.pending]: (state, action) => {
			state.isLoading = true;
		},
		[login.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.token = payload.data.encodedToken;
			state.user = payload.data.foundUser;
		},
		[login.rejected]: (state, action) => {
			state.isLoading = false;
			console.error(action);
		},
		[signup.pending]: (state, action) => {
			state.isLoading = true;
		},
		[signup.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.token = payload.data.encodedToken;
			state.user = payload.data.createdUser;
		},
		[signup.rejected]: (state, action) => {
			state.isLoading = false;
			console.error(action);
		},
		[editProfile.pending]: (state, action) => {
			state.isLoading = true;
		},
		[editProfile.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.user = payload.data.user;
		},
		[editProfile.rejected]: (state, action) => {
			state.isLoading = false;
			console.error(action);
		},
	},
});

export default authSlice.reducer;
