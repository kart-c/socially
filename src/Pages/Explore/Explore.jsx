import React, { useEffect } from 'react';
import { Loader, PgWrapper, Post } from 'Components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from 'Redux/Thunk';

const Explore = ({ onOpen }) => {
	const dispatch = useDispatch();
	const { posts, status } = useSelector((state) => state.posts);

	useEffect(() => {
		if (status === 'idle') {
			const getPosts = async () => await dispatch(getAllPosts());
			getPosts();
		}
	}, [dispatch, status]);

	return (
		<PgWrapper>
			{status === 'idle' ? <Loader /> : null}
			{posts?.length > 0
				? posts.map((post) => <Post key={post._id} {...post} onOpen={onOpen} />)
				: null}
		</PgWrapper>
	);
};

export { Explore };
