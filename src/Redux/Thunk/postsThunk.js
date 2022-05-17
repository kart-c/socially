import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllPosts = createAsyncThunk('posts/all', async ({ rejectWithValue }) => {
	try {
		const response = await axios.get('/api/posts');
		const data = { data: response.data, status: response.status };
		return data;
	} catch (error) {
		return rejectWithValue({ status: error.response.status, data: error.response.data });
	}
});
