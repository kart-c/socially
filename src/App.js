import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import { LeftNav, RightAside } from 'Components';
import { Home, Login, Signup } from 'Pages';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<Container as="main" maxW="container.xl" mx="auto" display="flex">
			<LeftNav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
			<RightAside />
		</Container>
	);
}

export default App;
