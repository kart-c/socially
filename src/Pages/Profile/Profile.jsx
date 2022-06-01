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
	useToast,
	VStack,
} from '@chakra-ui/react';
import { MdLogout } from 'react-icons/md';
import { FollowerModal, Loader, PgWrapper, Post, ProfileModal } from 'Components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, logout } from 'Redux/Slice';
import { follow, unfollow } from 'Redux/Thunk';
import { getUser } from 'Utils/getUser';

const Profile = ({ onOpen: onOpenPost, isOpen: isOpenPost }) => {
	const [userPosts, setUserPosts] = useState([]);
	const [userObj, setUserObj] = useState();
	const [btnState, setBtnState] = useState();
	const [loader, setLoader] = useState(false);
	const [modalUsers, setModalUsers] = useState({ title: '', users: [] });
	const { users } = useSelector((state) => state.users);
	const { posts } = useSelector((state) => state.posts);
	const { user: loggedInUser, token } = useSelector((state) => state.auth);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { username } = useParams();
	const dispatch = useDispatch();
	const toast = useToast();
	const {
		isOpen: followerIsOpen,
		onOpen: followerOnOpen,
		onClose: followerOnClose,
	} = useDisclosure();

	useEffect(() => {
		setLoader(true);
		if (loggedInUser.username === username) {
			getUser(loggedInUser._id, setUserObj, setLoader);
		} else {
			const currentUser = users.find((item) => item.username === username);
			if (currentUser) getUser(currentUser._id, setUserObj, setLoader);
		}
	}, [loggedInUser, username, users]);

	useEffect(() => {
		setLoader(true);
		try {
			const getUserPosts = async () => {
				const response = await axios.get(`/api/posts/user/${username}`);
				if (response.status === 200) {
					setUserPosts(response.data.posts);
					setLoader(false);
				}
			};
			getUserPosts();
		} catch (error) {
			console.error(error);
		}
	}, [username, isOpenPost, posts]);

	const followHandler = async () => {
		setBtnState(true);
		const currentUser = users.find((item) => item.username === username);
		const response = await dispatch(follow({ token, _id: currentUser._id }));
		if (response.payload.status === 200) {
			setBtnState(false);
			dispatch(followUser(response.payload.data.user));
		}
	};

	const unfollowHandler = async () => {
		setBtnState(true);
		const currentUser = users.find((item) => item.username === username);
		const response = await dispatch(unfollow({ token, _id: currentUser._id }));
		if (response.payload.status === 200) {
			setBtnState(false);
			dispatch(followUser(response.payload.data.user));
		}
	};

	const logoutHandler = () => {
		toast({
			status: 'success',
			duration: 5000,
			title: 'Logged out successfully',
			position: 'bottom-right',
			isClosable: true,
		});
		dispatch(logout());
		localStorage.clear();
	};

	return (
		<PgWrapper>
			{loader ? <Loader /> : null}
			{modalUsers.users.length > 0 ? (
				<FollowerModal
					followerIsOpen={followerIsOpen}
					followerOnClose={followerOnClose}
					modalUsers={modalUsers}
					setModalUsers={setModalUsers}
				/>
			) : null}
			{userObj?.username ? (
				<>
					<ProfileModal
						isOpen={isOpen}
						onClose={onClose}
						defaultdata={userObj}
						name={`${userObj.firstName} ${userObj.lastName}`}
					/>
					<Flex
						p="4"
						align="flex-start"
						gap="3"
						wrap={{ base: 'wrap', sm: 'nowrap' }}
						borderBottom={loggedInUser.username === username ? '1px solid' : '0'}
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
								<Text as="span">{userPosts.length} Posts</Text>
								<Text
									as="button"
									onClick={() => {
										setModalUsers((prev) => ({
											...prev,
											users: userObj.followers,
											title: 'Followers',
										}));
										followerOnOpen();
									}}
								>
									{userObj.followers.length} Followers
								</Text>
								<Text
									as="button"
									onClick={() => {
										setModalUsers((prev) => ({
											...prev,
											users: userObj.following,
											title: 'Following',
										}));
										followerOnOpen();
									}}
								>
									{userObj.following.length} Following
								</Text>
							</Flex>
							<Link href={userObj.link} isExternal color="brand.500" fontSize="14px">
								{userObj.link}
							</Link>
						</VStack>
						{loggedInUser.username === username ? (
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
										onClick={logoutHandler}
									/>
								</Tooltip>
							</Flex>
						) : null}
					</Flex>
					{loggedInUser.username !== username ? (
						userObj.followers.some((item) => item.username === loggedInUser.username) ? (
							<Flex justifyContent="center" pb="6" borderBottom="1px solid" borderColor="gray.200">
								<Button
									onClick={unfollowHandler}
									disabled={btnState}
									variant="basic"
									border="2px solid"
									color="brand.500"
									bgColor="#fff"
									_disabled={{ opacity: 1 }}
								>
									Unfollow
								</Button>
							</Flex>
						) : (
							<Flex justifyContent="center" pb="6" borderBottom="1px solid" borderColor="gray.200">
								<Button
									onClick={followHandler}
									disabled={btnState}
									_disabled={{ opacity: 1 }}
									variant="brand"
								>
									Follow
								</Button>
							</Flex>
						)
					) : null}
					{userPosts.length > 0
						? [...userPosts]
								.reverse()
								.map((post) => <Post {...post} key={post._id} onOpen={onOpenPost} />)
						: null}
				</>
			) : null}
		</PgWrapper>
	);
};

export { Profile };
