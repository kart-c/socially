import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk('users/all', async () => {
	const response = await axios.get('/api/users');
	const data = { data: response.data, status: response.status };
	return data;
});
