import { createSlice } from '@reduxjs/toolkit';
import { getAllPosts, newPost } from 'Redux/Thunk';
import { editPost } from 'Redux/Thunk';

const initialState = {
	posts: [],
	status: 'idle',
	postData: { content: '', isEdited: false },
};

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		postBeingEdited: (state, action) => {
			state.postData.isEdited = true;
			state.postData.content = action.payload.content;
			state.postId = action.payload._id;
		},
		inputHandler: (state, action) => {
			state.postData.content = action.payload;
		},
		closeModal: (state, action) => {
			state.postData.content = '';
		},
	},
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
			state.postData.content = '';
			state.postData.isEdited = false;
			state.posts = payload.data.posts;
		},
		[newPost.rejected]: (state, action) => {
			state.status = 'failed';
			console.error(action);
			state.postData.content = '';
			state.postData.isEdited = false;
		},
		[editPost.pending]: (state, action) => {},
		[editPost.fulfilled]: (state, { payload }) => {
			console.log(payload);
			state.status = 'success';
			state.postData.content = '';
			state.postData.isEdited = false;
			state.posts = payload.data.posts;
		},
		[editPost.rejected]: (state, action) => {
			state.status = 'failed';
			console.error(action);
			state.postData.content = '';
			state.postData.isEdited = false;
		},
	},
});

export const { postBeingEdited, inputHandler, closeModal } = postsSlice.actions;

export default postsSlice.reducer;
