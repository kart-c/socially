import React from 'react';
import { Container, useDisclosure } from '@chakra-ui/react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { LeftNav, PostModal, RequireAuth, RightAside } from 'Components';
import { Explore, Home, Login, Signup, Bookmark, Profile, Error } from 'Pages';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { pathname } = useLocation();
	const { token } = useSelector((state) => state.auth);
	return (
		<Container
			as="main"
			maxW="container.xl"
			mx="auto"
			display="flex"
			justifyContent={pathname === '/signup' ? 'center' : 'initial'}
		>
			<PostModal onClose={onClose} isOpen={isOpen} />
			{pathname === '/' || pathname === '/signup' || !token ? null : <LeftNav onOpen={onOpen} />}
			<Routes>
				<Route
					path="/home"
					element={
						<RequireAuth>
							<Home onOpen={onOpen} />{' '}
						</RequireAuth>
					}
				/>
				<Route path="/" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route
					path="/explore"
					element={
						<RequireAuth>
							<Explore onOpen={onOpen} />
						</RequireAuth>
					}
				/>
				<Route
					path="/bookmark"
					element={
						<RequireAuth>
							<Bookmark onOpen={onOpen} />
						</RequireAuth>
					}
				/>
				<Route
					path="/profile/:username"
					element={
						<RequireAuth>
							<Profile onOpen={onOpen} isOpen={isOpen} />
						</RequireAuth>
					}
				/>
				<Route path="*" element={<Error />} />
			</Routes>
			{pathname === '/' || pathname === '/signup' || !token ? null : <RightAside />}
		</Container>
	);
}

export default App;
