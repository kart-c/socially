import { createSlice } from '@reduxjs/toolkit';
import { getAllPosts } from 'Redux/Thunk';

const initialState = {
	posts: [],
	isLoading: false,
};

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: {
		[getAllPosts.pending]: (state, action) => {
			state.isLoading = true;
		},
		[getAllPosts.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.posts = payload.data.posts;
		},
		[getAllPosts.rejected]: (state, action) => {
			state.isLoading = false;
			console.error(action);
		},
	},
});

export default postsSlice.reducer;
