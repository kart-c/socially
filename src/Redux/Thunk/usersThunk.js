import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk('users/all', async ({ rejectWithValue }) => {
	try {
		const response = await axios.get('/api/users');
		const data = { data: response.data, status: response.status };
		return data;
	} catch (error) {
		return rejectWithValue({ status: error.response.status, data: error.response.data });
	}
});

export const follow = createAsyncThunk(
	'users/follow',
	async ({ token, _id }, { rejectWithValue }) => {
		try {
			const response = await axios.post(
				`/api/users/follow/${_id}`,
				{},
				{
					headers: { authorization: token },
				}
			);
			return { data: response.data, status: response.status };
		} catch (error) {
			return rejectWithValue({ status: error.response.status, data: error.response.data });
		}
	}
);

export const unfollow = createAsyncThunk(
	'users/follow',
	async ({ token, _id }, { rejectWithValue }) => {
		try {
			const response = await axios.post(
				`/api/users/unfollow/${_id}`,
				{},
				{
					headers: { authorization: token },
				}
			);
			return { data: response.data, status: response.status };
		} catch (error) {
			return rejectWithValue({ status: error.response.status, data: error.response.data });
		}
	}
);
