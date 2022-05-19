import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
	const location = useLocation();
	const { token } = useSelector((state) => state.auth);
	return token ? children : <Navigate to="/" state={{ from: location.pathname }} replace />;
};

export { RequireAuth };
