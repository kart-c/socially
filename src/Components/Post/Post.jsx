import React from 'react';
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
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverArrow,
	PopoverBody,
	VStack,
} from '@chakra-ui/react';
// eslint-disable-next-line
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaEllipsisV } from 'react-icons/fa';
// eslint-disable-next-line
import { MdOutlineBookmarkBorder, MdOutlineBookmark } from 'react-icons/md';
import { Comment } from 'Components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postBeingEdited } from 'Redux/Slice';
import { deletePost } from 'Redux/Thunk';

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
}) => {
	const navigate = useNavigate();
	const { user, token } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const editHandler = async () => {
		const response = await dispatch(postBeingEdited({ content, _id }));
		if (response.payload) {
			onOpen();
		}
	};

	const deleteHandler = () => dispatch(deletePost({ _id, token }));

	return (
		<Box as="article" p="4" borderBottom="1px solid" borderColor="gray.200" position="relative">
			<Flex gap="3">
				<Avatar
					name={`${firstName} ${lastName}`}
					src={user.username === username ? user.profilePic : profilePic}
					cursor="pointer"
					onClick={() => navigate(`/profile/${username}`)}
				/>
				<Flex mt="2" gap="3" flexDir="column">
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
							<Popover>
								<PopoverTrigger>
									<IconButton
										position="absolute"
										right="3"
										top="3"
										borderRadius="full"
										aria-label="options"
										icon={<FaEllipsisV />}
										justifySelf="flex-end"
										variant={'basic'}
									/>
								</PopoverTrigger>
								<PopoverContent w="max-content">
									<PopoverArrow />
									<PopoverBody>
										<VStack>
											<Button variant="basic" fontSize="14px" onClick={editHandler}>
												Edit
											</Button>
											<Button
												variant="basic"
												fontSize="14px"
												color="red.600"
												onClick={deleteHandler}
											>
												Delete
											</Button>
										</VStack>
									</PopoverBody>
								</PopoverContent>
							</Popover>
						)}
					</Flex>
					<Text wordBreak="break-word">{content}</Text>
				</Flex>
			</Flex>
			<Flex ml="60px" mt="4" w="calc(100% - 60px)">
				<Tooltip label="Like">
					<Box display="flex" alignItems="center">
						<IconButton
							aria-label="Like"
							icon={<AiOutlineHeart fontSize="20px" />}
							borderRadius="full"
							variant="redIcon"
						/>
						{likes.likeCount ? likes.likeCount : null}
					</Box>
				</Tooltip>
				{/* <Tooltip label="Like">
					<IconButton
						aria-label="Like"
						color="red.200"
						icon={<AiFillHeart fontSize="20px" />}
						borderRadius="full"
						variant="redIcon"
					/>
				</Tooltip> */}
				{/* <Tooltip label="Bookmark">
					<IconButton
						aria-label="Bookmark"
						color="brand.500"
						icon={<MdOutlineBookmark fontSize="20px" />}
						borderRadius="full"
						variant="brandIcon"
					/>
				</Tooltip> */}
				<Tooltip label="Bookmark">
					<IconButton
						display="flex"
						ml="auto"
						aria-label="Bookmark"
						icon={<MdOutlineBookmarkBorder fontSize="20px" />}
						borderRadius="full"
						variant="brandIcon"
					/>
				</Tooltip>
			</Flex>
			<HStack mt="1" gap="2" position="relative">
				<Avatar
					name={`${firstName}  ${lastName}`}
					src={user.username === username ? user.profilePic : user.profilePic}
					size="sm"
				/>
				<Input type="text" placeholder="Comment . . ." pr="14" />
				<Button
					variant="basic"
					color="brand.500"
					p="0"
					position="absolute"
					right="2.5"
					h="auto"
					zIndex="1"
				>
					Post
				</Button>
			</HStack>
			{comments?.length > 0
				? comments.map((comment) => <Comment key={comment._id} {...comment} />)
				: null}
		</Box>
	);
};

export { Post };
