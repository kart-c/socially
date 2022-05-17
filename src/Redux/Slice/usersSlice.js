import { createSlice } from '@reduxjs/toolkit';
import { getUsers, follow, unfollow } from 'Redux/Thunk';

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
		[follow.pending]: (state, action) => {
			state.isLoading = true;
		},
		[follow.fulfilled]: (state, { payload }) => {
			const {
				data: { followUser },
				data: { user },
			} = payload;
			state.users = state.users.map((item) =>
				item.username === followUser.username
					? followUser
					: item.username === user.username
					? user
					: item
			);
			state.isLoading = false;
		},
		[follow.rejected]: (state, action) => {
			state.isLoading = false;
		},
		[unfollow.pending]: (state, action) => {
			state.isLoading = true;
		},
		[unfollow.fulfilled]: (state, { payload }) => {
			const {
				data: { followUser },
				data: { user },
			} = payload;
			state.users = state.users.map((item) =>
				item.username === followUser.username
					? followUser
					: item.username === user.username
					? user
					: item
			);
			state.isLoading = false;
		},
		[unfollow.rejected]: (state, action) => {
			state.isLoading = false;
		},
	},
});

export default usersSlice.reducer;
