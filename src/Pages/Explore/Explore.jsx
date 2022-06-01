import React, { useState, useEffect, useRef } from 'react';
import { Loader, PgWrapper, Post, Search } from 'Components';
import { Box, Text } from '@chakra-ui/react';
import axios from 'axios';
import { getAllPosts } from 'Redux/Thunk';
import { useDispatch, useSelector } from 'react-redux';

const Explore = ({ onOpen }) => {
	const [posts, setPosts] = useState([]);
	const [pgLoading, setPgLoading] = useState(true);
	const [loadPosts, setLoadPosts] = useState(false);
	const [pageEnd, setPageEnd] = useState(false);
	const [pgNumber, setPgNumber] = useState(1);
	const intersectionRef = useRef();
	const { posts: allPosts, status } = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		if (status === 'idle') {
			const getPosts = async () => await dispatch(getAllPosts());
			getPosts();
		}
	});

	useEffect(() => {
		const ref = intersectionRef.current;
		const intersectionHandler = (entries) => {
			if (entries[0].isIntersecting) {
				setPgNumber((prev) => prev + 1);
			}
		};
		const observer = new IntersectionObserver(intersectionHandler, { threshold: 0.75 });
		if (ref) observer.observe(ref);

		return () => observer.unobserve(ref);
	}, []);

	useEffect(() => {
		if (!pageEnd) {
			const getPosts = async () => {
				try {
					setLoadPosts(true);
					const response = await axios.get(`/api/explore/${pgNumber}`);
					if (response.status === 200) {
						if (response.data.posts.length === posts.length) setPageEnd(true);
						setPosts(response.data.posts);
					}
				} catch (error) {
					console.error(error);
				} finally {
					setPgLoading(false);
					setLoadPosts(false);
				}
			};
			getPosts();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pgNumber, pageEnd]);

	const filteredPosts = pageEnd
		? allPosts
		: allPosts.filter((post) => posts.some((item) => item._id === post._id));

	return (
		<PgWrapper>
			<Search />
			{pgLoading ? <Loader /> : null}
			{filteredPosts?.length > 0 ? (
				<>
					{filteredPosts.map((post) => (
						<Post key={post._id} {...post} onOpen={onOpen} />
					))}
				</>
			) : null}
			{loadPosts ? (
				<Box mb="4">
					<Loader height="100px" />
				</Box>
			) : null}
			<Box w="100%" ref={intersectionRef} h="40px"></Box>
			{!pgLoading && pageEnd ? (
				<Text mb="4" pb={{ base: '16', mySm: '0' }} textAlign="center">
					Page End !
				</Text>
			) : null}
		</PgWrapper>
	);
};

export { Explore };
