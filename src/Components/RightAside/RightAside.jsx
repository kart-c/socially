import React, { useEffect, useState } from 'react';
import { Avatar, Button, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { follow, getUsers } from 'Redux/Thunk';
import { Loader } from 'Components';
import { followUser } from 'Redux/Slice';

const RightAside = () => {
	const [unfollowedUsers, setUnfollowedUsers] = useState([]);
	const dispatch = useDispatch();
	const { users, isLoading } = useSelector((state) => state.users);
	const { token, user } = useSelector((state) => state.auth);

	useEffect(() => {
		const getAllUsers = async () => await dispatch(getUsers());
		getAllUsers();
	}, [dispatch]);

	useEffect(() => {
		const removeCurrUser = users.filter((item) => item.username !== user.username);
		const filterUsers = removeCurrUser.filter((userToFilter) =>
			user.following.every((item) => item.username !== userToFilter.username)
		);
		setUnfollowedUsers(filterUsers);
	}, [users, user.username, user.following]);

	const followHandler = async (_id) => {
		const response = await dispatch(follow({ token, _id }));
		if (response.payload.status === 200) {
			dispatch(followUser(response.payload.data.user));
		}
	};

	return (
		<VStack
			as="aside"
			ml="4"
			gap="3"
			mt="6"
			bgColor="gray.100"
			borderRadius="lg"
			align="flex-start"
			h="max-content"
			maxH="calc(100vh - 48px)"
			position="sticky"
			top="6"
			display={{ base: 'none', myMd: 'flex' }}
			w="300px"
			overflowY="auto"
			minW="max-content"
		>
			{isLoading ? (
				<Loader />
			) : unfollowedUsers.length > 0 ? (
				<>
					<Text m="4">People you may know</Text>
					{unfollowedUsers.map((unFollowUser) => (
						<Flex
							key={unFollowUser._id}
							w="full"
							borderBottom="1px solid"
							borderColor="gray.200"
							p="4"
							pt="0"
							gap="2"
							align={{ base: 'flex-start', lg: 'center' }}
							flexDir={{
								base: 'column',
								lg: 'row',
							}}
							_last={{
								borderBottom: '0',
							}}
						>
							<HStack>
								<Avatar name="Master Oogway" src="https://" size="sm" />
								<VStack align="flex-start" spacing="0" ml="2">
									<Text as="span" fontSize="16px">
										{`${unFollowUser.firstName} ${unFollowUser.lastName}`}
									</Text>
									<Text as="span" fontSize="14px" color="gray.300">
										@{unFollowUser.username}
									</Text>
								</VStack>
							</HStack>
							<Button
								variant="brand"
								m="0"
								ml={{ base: '0', lg: 'auto' }}
								size="sm"
								onClick={() => followHandler(unFollowUser._id)}
							>
								Follow
							</Button>
						</Flex>
					))}
				</>
			) : null}
		</VStack>
	);
};

export { RightAside };
