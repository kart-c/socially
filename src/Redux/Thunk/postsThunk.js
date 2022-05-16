import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllPosts = createAsyncThunk('posts/all', async () => {
	const response = await axios.get('/api/posts');
	const data = { data: response.data, status: response.status };
	return data;
});
