import React from 'react';
import { Loader, PgWrapper, Post } from 'Components';
import { useSelector } from 'react-redux';

const Explore = () => {
	const { posts, isLoading } = useSelector((state) => state.posts);

	return (
		<PgWrapper>
			{isLoading && <Loader />}
			{posts?.length > 0 ? (
				posts.map((post) => <Post key={post._id} {...post} />)
			) : (
				<div>No posts to show</div>
			)}
		</PgWrapper>
	);
};

export { Explore };
