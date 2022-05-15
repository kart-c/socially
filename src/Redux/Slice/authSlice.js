import { createSlice } from '@reduxjs/toolkit';
import { login } from 'Redux/Thunk';

const initialState = {
	user: null,
	token: null,
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
		},
	},
});

export default authSlice.reducer;
