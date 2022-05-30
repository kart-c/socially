import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PgWrapper = ({ children }) => {
	const { user } = useSelector((state) => state.auth);

	return (
		<Box
			as="section"
			pt="6"
			w={user.following.length === 7 ? '100%' : '45%'}
			minHeight="100vh"
			borderRight="1px solid"
			borderLeft="1px solid"
			borderColor="gray.200"
			flexGrow="1"
		>
			<Heading
				as="h1"
				my="0"
				color="brand.500"
				px="4"
				mb="2"
				display={{ base: 'block', mySm: 'none' }}
			>
				<Link to="/">Socially</Link>
			</Heading>
			{children}
		</Box>
	);
};

export { PgWrapper };
