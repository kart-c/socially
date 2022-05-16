import React, { useEffect, useState } from 'react';
import { Avatar, Button, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'Redux/Thunk';

const RightAside = () => {
	const [unfollowedUsers, setUnfollowedUsers] = useState([]);
	const dispatch = useDispatch();
	const { users } = useSelector((state) => state.users);
	const { user } = useSelector((state) => state.auth);

	console.log('right aside');

	useEffect(() => {
		const getAllUsers = async () => await dispatch(getUsers());
		getAllUsers();
	}, [dispatch]);

	useEffect(() => {
		const removeCurrUser = users.filter((item) => item.username !== user.username);
		setUnfollowedUsers(removeCurrUser);
	}, [users, user.username]);

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
			position="sticky"
			top="6"
			display={{ base: 'none', myMd: 'flex' }}
		>
			{unfollowedUsers.length > 0 ? (
				<>
					<Text m="4">People you may know</Text>
					{unfollowedUsers.map((user) => (
						<Flex
							key={user._id}
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
										{`${user.firstName} ${user.lastName}`}
									</Text>
									<Text as="span" fontSize="14px" color="gray.300">
										@{user.username}
									</Text>
								</VStack>
							</HStack>
							<Button variant="brand" m="0" ml={{ base: '0', lg: 'auto' }} size="sm">
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
