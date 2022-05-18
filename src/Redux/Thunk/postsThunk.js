import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllPosts = createAsyncThunk('posts/all', async (post, { rejectWithValue }) => {
	try {
		const response = await axios.get('/api/posts');
		const data = { data: response.data, status: response.status };
		return data;
	} catch (error) {
		return rejectWithValue({ status: error.response.status, data: error.response.data });
	}
});

export const newPost = createAsyncThunk(
	'posts/new',
	async ({ post, token }, { rejectWithValue }) => {
		try {
			const response = await axios.post(
				'/api/posts',
				{ postData: post },
				{ headers: { authorization: token } }
			);
			return { data: response.data, status: response.status };
		} catch (error) {
			return rejectWithValue({ status: error.response.status, data: error.response.data });
		}
	}
);
