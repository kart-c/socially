import React, { useEffect, useState } from 'react';
import {
	Avatar,
	Button,
	Flex,
	Heading,
	IconButton,
	Link,
	Text,
	Tooltip,
	useDisclosure,
	VStack,
} from '@chakra-ui/react';
import { MdLogout } from 'react-icons/md';
import { PgWrapper, Post, ProfileModal } from 'Components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Profile = () => {
	const { users } = useSelector((state) => state.users);
	const { user } = useSelector((state) => state.auth);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [userObj, setUserObj] = useState();
	const { username } = useParams();
	const [userPosts, setUserPosts] = useState([]);
	const [userData, setUserData] = useState({
		bio: '',
		website: '',
		avatar: '',
	});

	useEffect(() => {
		const getUser = async () => {
			const user = users.find((item) => item.username === username);
			if (user) {
				const response = await axios.get(`/api/users/${user?._id}`);
				setUserObj(response.data.user);
			}
		};
		getUser();
	}, [username, users]);

	useEffect(() => {
		const getUserPosts = async () => {
			const response = await axios.get(`/api/posts/user/${username}`);
			setUserPosts(response.data.posts);
		};
		getUserPosts();
	}, [username]);

	return (
		<PgWrapper>
			{userObj?.username ? (
				<>
					<ProfileModal
						isOpen={isOpen}
						onClose={onClose}
						userData={userData}
						setUserData={setUserData}
						defaultAvatar={userObj.profilePic}
						name={`${userObj.firstName} ${userObj.lastName}`}
					/>
					<Flex
						p="4"
						align="flex-start"
						gap="3"
						wrap={{ base: 'wrap', sm: 'nowrap' }}
						borderBottom="1px solid"
						borderColor="gray.200"
					>
						<Avatar
							name={`${userObj.firstName} ${userObj.lastName}`}
							src={userObj.profilePic}
							size="lg"
						/>
						<VStack align="flex-start">
							<Heading as="h2" fontSize="24px">
								{`${userObj.firstName} ${userObj.lastName}`}
							</Heading>
							<Text as="span" color="gray.300" fontSize="14px">
								@{userObj.username}
							</Text>
							<Text>{userObj.bio}</Text>
							<Flex gap="4">
								<Text as="span">0 Posts</Text>
								<Text as="span">{userObj.followers.length} Followers</Text>
								<Text as="span">{userObj.following.length} Following</Text>
							</Flex>
							<Link href={userObj.link} isExternal color="brand.500" fontSize="14px">
								{userObj.link}
							</Link>
						</VStack>
						{user.username === username ? (
							<Flex
								flexDir={{ base: 'row', sm: 'column' }}
								align="flex-end"
								gap="4"
								ml="auto"
								w={{ base: '100%', sm: 'auto' }}
							>
								<Button
									variant="outline"
									border="2px solid"
									borderColor="brand.500"
									onClick={onOpen}
								>
									Edit
								</Button>
								<Tooltip label="Logout">
									<IconButton
										icon={<MdLogout />}
										aria-label="Logout"
										border="2px solid"
										borderColor="brand.500"
										variant="outline"
									/>
								</Tooltip>
							</Flex>
						) : null}
					</Flex>
					{userPosts.length > 0 ? userPosts.map((post) => <Post {...post} key={post._id} />) : null}
				</>
			) : null}
		</PgWrapper>
	);
};

export { Profile };
