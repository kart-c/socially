import React from 'react';
import { Container, useDisclosure } from '@chakra-ui/react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { LeftNav, PostModal, RightAside } from 'Components';
import { Explore, Home, Login, Signup, Bookmark, Profile } from 'Pages';
import './App.css';

function App() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { pathname } = useLocation();
	return (
		<Container
			as="main"
			maxW="container.xl"
			mx="auto"
			display="flex"
			justifyContent={pathname === '/signup' ? 'center' : 'initial'}
		>
			<PostModal onClose={onClose} isOpen={isOpen} />
			{pathname === '/' || pathname === '/signup' ? null : <LeftNav onOpen={onOpen} />}
			<Routes>
				<Route path="/home" element={<Home onOpen={onOpen} />} />
				<Route path="/" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/explore" element={<Explore onOpen={onOpen} />} />
				<Route path="/bookmark" element={<Bookmark onOpen={onOpen} />} />
				<Route path="/profile/:username" element={<Profile onOpen={onOpen} isOpen={isOpen} />} />
			</Routes>
			{pathname === '/' || pathname === '/signup' ? null : <RightAside />}
		</Container>
	);
}

export default App;
