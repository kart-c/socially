import React, { useState, useEffect } from 'react';
import { Loader, PgWrapper, Post, SortContainer } from 'Components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from 'Redux/Thunk';
import { sortByTrending } from 'Utils/sortByTrending';
import { sortByDate } from 'Utils/sortByDate';

const Explore = ({ onOpen }) => {
	const [trending, setTrending] = useState(false);
	const [sortBy, setSortBy] = useState('');
	const dispatch = useDispatch();
	const { posts, status } = useSelector((state) => state.posts);

	useEffect(() => {
		if (status === 'idle') {
			const getPosts = async () => await dispatch(getAllPosts());
			getPosts();
		}
	}, [dispatch, status]);

	const trendingSort = sortByTrending(posts, trending);

	const dateSort = sortByDate(trendingSort, sortBy);

	return (
		<PgWrapper>
			{status === 'idle' ? <Loader /> : null}
			{posts?.length > 0 ? (
				<>
					<SortContainer
						setTrending={setTrending}
						trending={trending}
						sortBy={sortBy}
						setSortBy={setSortBy}
					/>
					{dateSort.map((post) => (
						<Post key={post._id} {...post} onOpen={onOpen} />
					))}
				</>
			) : null}
		</PgWrapper>
	);
};

export { Explore };
