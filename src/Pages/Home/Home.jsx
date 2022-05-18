import React, { useEffect } from 'react';
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { FiPlusCircle } from 'react-icons/fi';
import { Loader, PgWrapper, Post } from 'Components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from 'Redux/Thunk';

const Home = ({ onOpen }) => {
	const dispatch = useDispatch();
	const { user: loggedInUser } = useSelector((state) => state.auth);
	const { posts, status } = useSelector((state) => state.posts);

	useEffect(() => {
		if (status === 'idle') {
			const getPosts = async () => await dispatch(getAllPosts());
			getPosts();
		}
	}, [dispatch, status]);

	const followedPosts = posts.filter(
		(item) =>
			loggedInUser.username === item.username ||
			loggedInUser.following.some((follower) => follower.username === item.username)
	);

	return (
		<>
			<PgWrapper>
				{status === 'pending' ? <Loader /> : null}
				{status === 'success' ? (
					<>
						<Box px="4" pb="4" borderBottom="1px solid" borderColor="gray.200">
							<Text as="h2" fontWeight="700" mb="2.5">
								Home
							</Text>
							<Flex gap="3" align="flex-end">
								<Avatar name="Kartik Choudhary" src="https://" />
								<Text
									fontSize="lg"
									mb="1"
									color="gray.300"
									cursor="text"
									flexGrow="1"
									onClick={onOpen}
								>
									What's Happening?
								</Text>
								<Box color="brand.500" bgColor="#fff" mb="1.5" cursor="pointer" onClick={onOpen}>
									<FiPlusCircle fontSize="24px" />
								</Box>
							</Flex>
						</Box>
						{followedPosts?.length > 0 ? (
							[...followedPosts].reverse().map((post) => <Post key={post._id} {...post} />)
						) : (
							<Box textAlign="center" mt="16">
								Follow some accounts to see posts
							</Box>
						)}
					</>
				) : null}
			</PgWrapper>
		</>
	);
};

export { Home };
