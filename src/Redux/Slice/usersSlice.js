import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from 'Redux/Thunk';

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
	},
});

export default usersSlice.reducer;
