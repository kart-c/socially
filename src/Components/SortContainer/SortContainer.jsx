import React from 'react';
import { Button, HStack, Select } from '@chakra-ui/react';
import { FiTrendingUp } from 'react-icons/fi';

const SortContainer = ({ setTrending, trending }) => {
	return (
		<HStack p="4" gap={{ base: '0', sm: '2' }} justifyContent="flex-end">
			<Button
				rightIcon={<FiTrendingUp />}
				variant={trending ? 'brand' : 'basic'}
				color={trending ? '#fff' : 'brand.500'}
				border="2px solid"
				onClick={() => setTrending((prev) => !prev)}
			>
				Trending
			</Button>
			<Select placeholder="Default" maxW="40">
				<option value="Oldest First">Oldest First</option>
				<option value="Newest First">Newest First</option>
			</Select>
		</HStack>
	);
};

export { SortContainer };
