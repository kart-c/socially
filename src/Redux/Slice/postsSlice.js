import { createSlice } from '@reduxjs/toolkit';
import { deletePost, dislike, getAllPosts, likePost, newComment, newPost } from 'Redux/Thunk';
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
		closeModal: (state, action) => {
			state.postData.isEdited = false;
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
		[deletePost.pending]: (state, action) => {},
		[deletePost.fulfilled]: (state, { payload }) => {
			state.posts = payload.data.posts;
		},
		[deletePost.rejected]: (state, action) => {
			console.error(action);
		},
		[likePost.pending]: (state, action) => {
			state.likeLoading = true;
		},
		[likePost.fulfilled]: (state, { payload }) => {
			state.likeLoading = false;
			state.posts = payload.data.posts;
		},
		[likePost.rejected]: (state, action) => {
			state.likeLoading = false;
			console.error(action);
		},
		[dislike.pending]: (state, action) => {
			state.likeLoading = true;
		},
		[dislike.fulfilled]: (state, { payload }) => {
			state.likeLoading = false;
			state.posts = payload.data.posts;
		},
		[dislike.rejected]: (state, action) => {
			state.likeLoading = false;
			console.error(action);
		},
		[newComment.pending]: (state, action) => {},
		[newComment.fulfilled]: (state, { payload }) => {
			state.posts = state.posts.map((post) =>
				post._id === payload.postId ? { ...post, comments: payload.data.comments } : post
			);
		},
		[newComment.rejected]: (state, action) => {
			console.error(action);
		},
	},
});

export const { postBeingEdited, inputHandler, closeModal } = postsSlice.actions;

export default postsSlice.reducer;
