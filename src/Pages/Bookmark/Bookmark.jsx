import React from 'react';
import { Box } from '@chakra-ui/react';
import { PgWrapper, Post } from 'Components';
import { useSelector } from 'react-redux';

const Bookmark = ({ onOpen }) => {
	const { user } = useSelector((state) => state.auth);

	return (
		<PgWrapper>
			{user.bookmarks.length > 0 ? (
				user.bookmarks.map((post) => <Post key={post._id} {...post} onOpen={onOpen} />)
			) : (
				<Box textAlign="center" mt="16">
					Bookmark posts to see here
				</Box>
			)}
		</PgWrapper>
	);
};

export { Bookmark };
