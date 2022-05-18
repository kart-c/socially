import { createSlice } from '@reduxjs/toolkit';
import { getUsers, follow, unfollow } from 'Redux/Thunk';

const initialState = {
	users: [],
	status: 'idle',
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: {
		[getUsers.pending]: (state, action) => {
			state.status = 'pending';
		},
		[getUsers.fulfilled]: (state, { payload }) => {
			state.users = payload.data.users;
			state.status = 'success';
		},
		[getUsers.rejected]: (state, action) => {
			state.status = 'failed';
		},
		[follow.pending]: (state, action) => {},
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
		},
		[follow.rejected]: (state, action) => {
			console.error(action);
		},
		[unfollow.pending]: (state, action) => {},
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
		},
		[unfollow.rejected]: (state, action) => {
			console.error(action);
		},
	},
});

export default usersSlice.reducer;
