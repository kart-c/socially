import { createSlice } from '@reduxjs/toolkit';
import { bookmark, editProfile, login, removeBookmark, signup } from 'Redux/Thunk';

const initialState = {
	user: JSON.parse(localStorage.getItem('user')) || null,
	token: localStorage.getItem('token') || null,
	status: 'idle',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		followUser: (state, action) => {
			state.user = action.payload;
		},
		unfollowUser: (state, action) => {
			state.user = action.payload;
		},
		btnLoading: (state, action) => {
			state.btnStatus = 'loading';
		},
	},
	extraReducers: {
		[login.pending]: (state, action) => {
			state.status = 'loading';
		},
		[login.fulfilled]: (state, { payload }) => {
			state.status = 'success';
			state.token = payload.data.encodedToken;
			state.user = payload.data.foundUser;
		},
		[login.rejected]: (state, action) => {
			state.status = 'failed';
			console.error(action);
		},
		[signup.pending]: (state, action) => {
			state.status = 'loading';
		},
		[signup.fulfilled]: (state, { payload }) => {
			state.status = 'success';
			state.token = payload.data.encodedToken;
			state.user = payload.data.createdUser;
		},
		[signup.rejected]: (state, action) => {
			state.status = 'failed';
			console.error(action);
		},
		[editProfile.pending]: (state, action) => {
			state.btnStatus = 'loading';
		},
		[editProfile.fulfilled]: (state, { payload }) => {
			state.btnStatus = 'success';
			state.user = payload.data.user;
		},
		[editProfile.rejected]: (state, action) => {
			state.btnStatus = 'failed';
			console.error(action);
		},
		[bookmark.pending]: (state, action) => {
			state.bookmarkLoading = true;
		},
		[bookmark.fulfilled]: (state, { payload }) => {
			state.bookmarkLoading = false;
			state.user.bookmarks = payload.data.bookmarks;
		},
		[bookmark.rejected]: (state, action) => {
			state.bookmarkLoading = false;
		},
		[removeBookmark.pending]: (state, action) => {
			state.bookmarkLoading = true;
		},
		[removeBookmark.fulfilled]: (state, { payload }) => {
			state.bookmarkLoading = false;
			state.user.bookmarks = payload.data.bookmarks;
		},
		[removeBookmark.rejected]: (state, action) => {
			state.bookmarkLoading = false;
		},
	},
});

export const { followUser, unfollowUser, btnLoading } = authSlice.actions;

export default authSlice.reducer;
