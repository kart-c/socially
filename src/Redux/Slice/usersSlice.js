import { createSlice } from '@reduxjs/toolkit';
import { editProfile, getUsers } from 'Redux/Thunk';

const initialState = {
	users: [],
	isLoading: false,
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: {
		[getUsers.pending]: (state, action) => {
			state.isLoading = true;
		},
		[getUsers.fulfilled]: (state, { payload }) => {
			state.users = payload.data.users;
			state.isLoading = false;
		},
		[getUsers.rejected]: (state, action) => {
			state.isLoading = false;
		},
		[editProfile.pending]: (state, action) => {
			state.isLoading = true;
		},
		[editProfile.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.users = state.users.map((user) =>
				user.username === payload.data.user.username ? payload.data.user : user
			);
		},
		[editProfile.rejected]: (state, action) => {
			state.isLoading = false;
			console.error(action);
		},
	},
});

export default usersSlice.reducer;
