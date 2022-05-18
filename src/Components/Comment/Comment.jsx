import React from 'react';
import { Avatar, Box, Heading, HStack, IconButton, Text } from '@chakra-ui/react';
import { FaEllipsisV } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Comment = ({ firstName, lastName, profilePic, text, username }) => {
	const { user } = useSelector((state) => state.auth);

	// useEffect(() => {
	// 	if (username === user.username) {
	// 		setCommentImg(img);
	// 	}
	// }, [img, user.username, username]);

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
						<IconButton
							position="absolute"
							right="0"
							top="1"
							bgColor="transparent"
							_active={{
								opacity: '0.7',
							}}
							borderRadius="full"
							aria-label="options"
							icon={<FaEllipsisV fontSize="14px" />}
							justifySelf="flex-end"
						/>
					) : null}
				</Box>
			</HStack>
		</>
	);
};

export { Comment };
