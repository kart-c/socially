import React from 'react';
import { Button, HStack, Select } from '@chakra-ui/react';
import { FiTrendingUp } from 'react-icons/fi';

const SortContainer = ({ setTrending, trending, setSortBy, sortBy }) => {
	return (
		<HStack p="4" pb="0" gap={{ base: '0', sm: '2' }} justifyContent="flex-end">
			<Button
				rightIcon={<FiTrendingUp />}
				variant={trending ? 'brand' : 'basic'}
				color={trending ? '#fff' : 'brand.500'}
				border="2px solid"
				onClick={() => {
					setSortBy('');
					setTrending((prev) => !prev);
				}}
			>
				Trending
			</Button>
			<Select
				placeholder="Default"
				maxW="40"
				value={sortBy}
				onChange={(e) => {
					setTrending(false);
					setSortBy(e.target.value);
				}}
			>
				<option value="oldest">Oldest First</option>
				<option value="newest">Newest First</option>
			</Select>
		</HStack>
	);
};

export { SortContainer };
