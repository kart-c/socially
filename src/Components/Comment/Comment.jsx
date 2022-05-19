import React from 'react';
import {
	Avatar,
	Box,
	Heading,
	HStack,
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from '@chakra-ui/react';
import { FaEllipsisV } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Comment = ({ firstName, lastName, profilePic, text, username }) => {
	const { user } = useSelector((state) => state.auth);

	return (
		<>
			<HStack mt="3" gap="2" align="flex-start">
				<Avatar
					name={`${firstName} ${lastName}`}
					src={username === user.username ? user.profilePic : profilePic}
					size="sm"
					fontSize="10px"
				/>
				<Box bgColor="gray.200" p="3" flexGrow="1" borderRadius="lg" position="relative">
					<Heading as="h4" fontWeight="700" fontSize="16" mb="2">
						{`${firstName} ${lastName}`}{' '}
						<Text
							as="span"
							fontWeight="400"
							fontSize="14"
							color="gray.300"
							display={{ base: 'none', mySm: 'inline' }}
						>
							@{username}
						</Text>
					</Heading>
					<Text>{text}</Text>
					{user?.username === username ? (
						<Menu>
							<MenuButton
								as={Button}
								rightIcon={<FaEllipsisV />}
								bgColor="transparent"
								position="absolute"
								right="3"
								top="3"
								borderRadius="full"
								pl="1"
								pr="3"
							/>
							<MenuList minW="max-content" px="2">
								<MenuItem>Edit</MenuItem>
								<MenuItem>Delete</MenuItem>
							</MenuList>
						</Menu>
					) : null}
				</Box>
			</HStack>
		</>
	);
};

export { Comment };
