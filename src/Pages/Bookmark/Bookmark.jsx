import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { PgWrapper, Post } from 'Components';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Bookmark = ({ onOpen }) => {
	const [bookmarks, setBookmarks] = useState([]);
	const { token, user } = useSelector((state) => state.auth);
	const { posts } = useSelector((state) => state.posts);

	useEffect(() => {
		const getBookmarks = async () => {
			const response = await axios.get('/api/users/bookmark', {
				headers: { authorization: token },
			});
			setBookmarks(response.data.bookmarks);
		};
		getBookmarks();
	}, [posts, token, user]);

	const bookmarkedPosts = posts.filter((post) =>
		bookmarks.some((bookmark) => bookmark._id === post._id)
	);

	return (
		<PgWrapper>
			{bookmarkedPosts.length > 0 ? (
				bookmarkedPosts.map((post) => <Post key={post._id} {...post} onOpen={onOpen} />)
			) : (
				<Box textAlign="center" mt="16">
					Bookmark posts to see here
				</Box>
			)}
		</PgWrapper>
	);
};

export { Bookmark };
