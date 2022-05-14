import React from 'react';
import { Container } from '@chakra-ui/react';
import { LeftNav, RightAside } from 'Components';
import { Home, Login, Signup } from 'Pages';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

function App() {
	const { pathname } = useLocation();
	return (
		<Container
			as="main"
			maxW="container.xl"
			mx="auto"
			display="flex"
			justifyContent={
				pathname.slice(1) === 'login' || pathname.slice(1) === 'signup' ? 'center' : 'unset'
			}
		>
			{pathname.slice(1) === 'login' || pathname.slice(1) === 'signup' ? null : <LeftNav />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
			{pathname.slice(1) === 'login' || pathname.slice(1) === 'signup' ? null : <RightAside />}
		</Container>
	);
}

export default App;
