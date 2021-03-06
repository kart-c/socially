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

export const bookmark = createAsyncThunk(
	'users/bookmark',
	async ({ _id, token }, { rejectWithValue }) => {
		try {
			const response = await axios.post(
				`/api/users/bookmark/${_id}`,
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

export const removeBookmark = createAsyncThunk(
	'users/remove-bookmark',
	async ({ _id, token }, { rejectWithValue }) => {
		try {
			const response = await axios.post(
				`/api/users/remove-bookmark/${_id}`,
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
