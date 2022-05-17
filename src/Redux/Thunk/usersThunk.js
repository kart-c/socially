import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk('users/all', async () => {
	const response = await axios.get('/api/users');
	const data = { data: response.data, status: response.status };
	return data;
});

export const editProfile = createAsyncThunk(
	'auth/editProfile',
	async ({ userData, token }, { rejectWithValue }) => {
		try {
			const response = await axios.post(
				'/api/users/edit',
				{
					userData,
				},
				{ headers: { authorization: token } }
			);
			return { data: response.data, status: response.status };
		} catch (error) {
			return rejectWithValue({ status: error.response.status, data: error.response.data });
		}
	}
);
