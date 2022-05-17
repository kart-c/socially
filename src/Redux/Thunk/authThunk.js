import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('auth/login', async (user, { rejectWithValue }) => {
	try {
		const response = await axios.post('/api/auth/login', user);
		const data = { data: response.data, status: response.status };
		return data;
	} catch (error) {
		return rejectWithValue({ status: error.response.status, data: error.response.data });
	}
});

export const signup = createAsyncThunk('auth/signup', async (user, { rejectWithValue }) => {
	try {
		const response = await axios.post('/api/auth/signup', user);
		const data = { data: response.data, status: response.status };
		return data;
	} catch (error) {
		return rejectWithValue({ status: error.response.status, data: error.response.data });
	}
});
