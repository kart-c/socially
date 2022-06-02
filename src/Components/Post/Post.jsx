import React, { useState } from 'react';
import {
	Avatar,
	Box,
	Flex,
	Heading,
	IconButton,
	Text,
	Tooltip,
	Input,
	HStack,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Image,
} from '@chakra-ui/react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaEllipsisV } from 'react-icons/fa';
import { MdOutlineBookmarkBorder, MdOutlineBookmark } from 'react-icons/md';
import { Comment } from 'Components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postBeingEdited } from 'Redux/Slice';
import { deletePost, dislike, likePost, bookmark, removeBookmark, newComment } from 'Redux/Thunk';

const Post = ({
	content,
	likes,
	username,
	firstName,
	lastName,
	profilePic,
	comments,
	onOpen,
	_id,
	createdAt,
	media,
}) => {
	const [commentInput, setCommentInput] = useState('');
	const navigate = useNavigate();
	const { user, token, bookmarkLoading } = useSelector((state) => state.auth);
	const { likeLoading } = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	const imgFormats = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

	const editHandler = async () => {
		const response = await dispatch(postBeingEdited({ content, _id }));
		if (response.payload) {
			onOpen();
		}
	};

	const deleteHandler = () => dispatch(deletePost({ _id, token }));

	const newCommentHandler = () => {
		dispatch(newComment({ _id, token, commentData: commentInput }));
		setCommentInput('');
	};

	const getDate = (createdAt) => {
		const date = new Date(createdAt).toLocaleString('en-In', { day: '2-digit' });
		const month = new Date(createdAt).toLocaleString('en-In', { month: 'short' });
		const year = new Date(createdAt).getFullYear();
		return `${date} ${month} ${year}`;
	};

	return (
		<Box
			as="article"
			p="4"
			borderBottom="1px solid"
			borderColor="gray.200"
			position="relative"
			py="6"
			_last={{
				pb: {
					md: '6',
					base: '16',
				},
			}}
		>
			<Flex gap="3">
				<Avatar
					name={`${firstName} ${lastName}`}
					src={user.username === username ? user.profilePic : profilePic}
					cursor="pointer"
					onClick={() => navigate(`/profile/${username}`)}
				/>
				<Flex gap="3" flexDir="column">
					<Flex w="100%" justify="space-between">
						<Heading
							as="h3"
							fontWeight="700"
							fontSize="16"
							cursor="pointer"
							onClick={() => navigate(`/profile/${username}`)}
						>
							{`${firstName}  ${lastName}`}{' '}
							<Text as="span" fontWeight="400" fontSize="14" color="gray.300">
								@{username}
							</Text>
						</Heading>
						{user.username === username && (
							<Menu>
								<MenuButton
									as={Button}
									rightIcon={<FaEllipsisV m="0" />}
									position="absolute"
									right="3"
									top="3"
									borderRadius="full"
									variant={'basic'}
									pl="1"
									pr="3"
								/>
								<MenuList minW="max-content" px="2">
									<MenuItem onClick={editHandler}>Edit</MenuItem>
									<MenuItem onClick={deleteHandler}>Delete</MenuItem>
								</MenuList>
							</Menu>
						)}
					</Flex>
					<Text wordBreak="break-word">{content}</Text>
					{media ? (
						imgFormats.some((img) => media.includes(img)) ? (
							<Image src={media} w="full" h="full" objectFit="cover" />
						) : (
							<video controls w="full" h="full">
								<source src={media} />
								Sorry, your browser doesn't support embedded videos.
							</video>
						)
					) : null}
				</Flex>
			</Flex>
			<Flex ml="60px" mt="4" w="calc(100% - 60px)">
				{likes.likedBy.some((like) => like.username === user.username) ? (
					<Tooltip label="Unlike">
						<Box display="flex" alignItems="center">
							<IconButton
								aria-label="Unlike"
								color="red.200"
								icon={<AiFillHeart fontSize="20px" />}
								borderRadius="full"
								variant="redIcon"
								isDisabled={likeLoading}
								_disabled={{
									opacity: 1,
									cursor: 'pointer',
								}}
								onClick={() => dispatch(dislike({ _id, token }))}
							/>
							{likes.likeCount ? likes.likeCount + ' likes' : null}
						</Box>
					</Tooltip>
				) : (
					<Tooltip label="Like">
						<Box display="flex" alignItems="center">
							<IconButton
								aria-label="Like"
								icon={<AiOutlineHeart fontSize="20px" />}
								borderRadius="full"
								variant="redIcon"
								isDisabled={likeLoading}
								_disabled={{
									opacity: 1,
									cursor: 'pointer',
								}}
								onClick={() => dispatch(likePost({ _id, token }))}
							/>
							{likes.likeCount ? `${likes.likeCount} likes` : null}
						</Box>
					</Tooltip>
				)}
				{user.bookmarks.some((post) => post._id === _id) ? (
					<Tooltip label="Delete Bookmark">
						<IconButton
							display="flex"
							ml="auto"
							aria-label="Delete Bookmark"
							color="brand.500"
							icon={<MdOutlineBookmark fontSize="20px" />}
							borderRadius="full"
							variant="brandIcon"
							disabled={bookmarkLoading}
							_disabled={{
								opacity: 1,
								cursor: 'pointer',
							}}
							onClick={() => dispatch(removeBookmark({ _id, token }))}
						/>
					</Tooltip>
				) : (
					<Tooltip label="Bookmark">
						<IconButton
							display="flex"
							ml="auto"
							aria-label="Bookmark"
							icon={<MdOutlineBookmarkBorder fontSize="20px" />}
							borderRadius="full"
							variant="brandIcon"
							disabled={bookmarkLoading}
							_disabled={{
								opacity: 1,
								cursor: 'pointer',
							}}
							onClick={() => dispatch(bookmark({ _id, token }))}
						/>
					</Tooltip>
				)}
			</Flex>
			<Box textAlign="right" fontSize="sm" mb="2" color="gray.300">
				{getDate(createdAt)}
			</Box>
			<HStack mt="1" gap="2" position="relative">
				<Avatar
					name={`${user.firstName}  ${user.lastName}`}
					src={user.username === username ? user.profilePic : user.profilePic}
					size="sm"
				/>
				<Input
					type="text"
					placeholder="Comment . . ."
					pr="14"
					value={commentInput}
					onChange={(e) => setCommentInput(e.target.value)}
				/>
				<Button
					variant="basic"
					color="brand.500"
					p="0"
					position="absolute"
					right="2.5"
					h="auto"
					zIndex="1"
					disabled={!commentInput.trim()}
					_disabled={{
						opacity: 0.6,
					}}
					onClick={newCommentHandler}
				>
					Post
				</Button>
			</HStack>
			{comments?.length > 0
				? comments.map((comment) => <Comment key={comment._id} {...comment} postId={_id} />)
				: null}
		</Box>
	);
};

export { Post };
