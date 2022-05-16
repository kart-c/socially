import React from 'react';
import { Flex, Spinner } from '@chakra-ui/react';

const Loader = () => {
	return (
		<Flex h="calc(100vh - 24px)" w="full" align="center" justify="center">
			<Spinner thickness="4px" speed="0.65s" emptyColor="gray.400" color="brand.500" size="xl" />
		</Flex>
	);
};

export { Loader };
