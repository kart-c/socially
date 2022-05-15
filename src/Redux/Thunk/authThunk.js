import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('auth/login', async (user) => {
	const response = await axios.post('/api/auth/login', user);
	const data = { data: response.data, status: response.status };
	return data;
});
