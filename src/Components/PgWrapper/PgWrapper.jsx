import { Box } from '@chakra-ui/react';
import React from 'react';

const PgWrapper = ({ children }) => {
	return (
		<Box
			as="section"
			pt="6"
			w="45%"
			minHeight="100vh"
			borderRight="1px solid"
			borderLeft="1px solid"
			borderColor="gray.200"
		>
			{children}
		</Box>
	);
};

export { PgWrapper };
