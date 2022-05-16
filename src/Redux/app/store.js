import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'Redux/Slice/authSlice';
import postsReducer from 'Redux/Slice/postsSlice';
import usersReducer from 'Redux/Slice/usersSlice';

export const store = configureStore({
	reducer: { auth: authReducer, posts: postsReducer, users: usersReducer },
});
