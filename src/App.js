import React from 'react';
import { Container, useDisclosure } from '@chakra-ui/react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { LeftNav, PostModal, RightAside } from 'Components';
import { Explore, Home, Login, Signup, Bookmark } from 'Pages';
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
			justifyContent={
				pathname.slice(1) === 'login' || pathname.slice(1) === 'signup' ? 'center' : 'unset'
			}
		>
			<PostModal onClose={onClose} isOpen={isOpen} />
			{pathname.slice(1) === 'login' || pathname.slice(1) === 'signup' ? null : (
				<LeftNav onOpen={onOpen} />
			)}
			<Routes>
				<Route path="/" element={<Home onOpen={onOpen} />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/explore" element={<Explore />} />
				<Route path="/bookmark" element={<Bookmark />} />
			</Routes>
			{pathname.slice(1) === 'login' || pathname.slice(1) === 'signup' ? null : <RightAside />}
		</Container>
	);
}

export default App;
