import React, { useEffect, useRef, useState } from 'react';
import { Avatar, Box, Flex, HStack, Input, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { searchHandler } from 'Utils/searchHandler';
import { useNavigate } from 'react-router-dom';

const Search = () => {
	const [searchInput, setSearchInput] = useState('');
	const [isDebouncing, setIsDebouncing] = useState(false);
	const [searchResults, setSearchResults] = useState([]);
	const { users } = useSelector((state) => state.users);
	const timerRef = useRef();
	const navigate = useNavigate();

	useEffect(() => {
		clearTimeout(timerRef.current);
		if (searchInput !== '') {
			timerRef.current = setTimeout(() => {
				const result = searchHandler(users, searchInput.toLowerCase());
				setSearchResults(result);
				setIsDebouncing(true);
			}, 300);
		}

		return () => setIsDebouncing(false);
	}, [searchInput, users]);

	return (
		<Box p="4" position="relative">
			<Input
				type="search"
				placeholder="Search Socially"
				value={searchInput}
				onChange={(e) => setSearchInput(e.target.value)}
			/>
			{isDebouncing && searchInput ? (
				searchResults.length > 0 ? (
					<Flex
						flexDir="column"
						position="absolute"
						right="4"
						left="4"
						zIndex="2"
						bgColor="white"
						maxH="40"
						overflowY="auto"
					>
						{searchResults.map((result) => (
							<HStack
								key={result._id}
								h="16"
								border="1px solid"
								cursor="pointer"
								onClick={() => navigate(`/profile/${result.username}`)}
							>
								<Avatar src={result.profilePic} alt={result.firstName + ' ' + result.lastName} />
								<Box>
									<Text as="span">
										{result.firstName} {result.lastName}{' '}
									</Text>
									<Text as="span" fontSize="sm" color="gray.300">
										@{result.username}
									</Text>
								</Box>
							</HStack>
						))}
					</Flex>
				) : (
					<Text
						p="4"
						border="1px solid"
						position="absolute"
						right="4"
						left="4"
						bgColor="white"
						zIndex="2"
					>
						No result found
					</Text>
				)
			) : null}
		</Box>
	);
};

export { Search };
