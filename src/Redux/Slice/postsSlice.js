import { createSlice } from '@reduxjs/toolkit';
import { getAllPosts, newPost } from 'Redux/Thunk';

const initialState = {
	posts: [],
	status: 'idle',
};

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: {
		[getAllPosts.pending]: (state, action) => {
			state.status = 'pending';
		},
		[getAllPosts.fulfilled]: (state, { payload }) => {
			state.status = 'success';
			state.posts = payload.data.posts;
		},
		[getAllPosts.rejected]: (state, action) => {
			state.status = 'failed';
			console.error(action);
		},
		[newPost.pending]: (state, action) => {},
		[newPost.fulfilled]: (state, { payload }) => {
			state.status = 'success';
			state.posts = payload.data.posts;
		},
		[newPost.rejected]: (state, action) => {
			state.status = 'failed';
			console.error(action);
		},
	},
});

export default postsSlice.reducer;
