import React, { useState } from 'react';
import {
	Avatar,
	Box,
	Heading,
	HStack,
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	Textarea,
	ButtonGroup,
} from '@chakra-ui/react';
import { FaEllipsisV } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, editComment } from 'Redux/Thunk';

const Comment = ({ firstName, lastName, profilePic, text, username, _id, postId }) => {
	const [comment, setComment] = useState({ editable: false, content: '' });
	const { user, token } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const editHandler = () => {
		setComment((prev) => ({ ...prev, editable: true, content: text }));
	};

	const updateComment = async () => {
		if (!(comment.content === text)) {
			const response = await dispatch(
				editComment({ postId, commentId: _id, commentData: comment.content, token })
			);
			if (response.payload.status === 201) {
				setComment({ ...comment, content: '', editable: false });
			}
		} else {
			setComment({ ...comment, content: '', editable: false });
		}
	};

	const deleteHandler = () => dispatch(deleteComment({ postId, commentId: _id, token }));

	return (
		<>
			<HStack mt="3" gap="2" align="flex-start">
				<Avatar
					name={`${firstName} ${lastName}`}
					src={username === user.username ? user.profilePic : profilePic}
					size="sm"
					fontSize="10px"
				/>
				<Box bgColor="gray.200" p="3" flexGrow="1" borderRadius="lg" position="relative">
					<Heading as="h4" fontWeight="700" fontSize="16" mb="2">
						{`${firstName} ${lastName}`}{' '}
						<Text
							as="span"
							fontWeight="400"
							fontSize="14"
							color="gray.300"
							display={{ base: 'none', mySm: 'inline' }}
						>
							@{username}
						</Text>
					</Heading>
					{comment.editable ? (
						<Textarea
							row="3"
							resize="none"
							bgColor="gray.100"
							value={comment.content}
							onChange={(e) => setComment((prev) => ({ ...prev, content: e.target.value }))}
							autoFocus
						/>
					) : (
						<Text wordBreak="break-word">{text}</Text>
					)}
					{user?.username === username && !comment.editable ? (
						<Menu>
							<MenuButton
								as={Button}
								rightIcon={<FaEllipsisV />}
								bgColor="transparent"
								position="absolute"
								right="3"
								top="3"
								borderRadius="full"
								pl="1"
								pr="3"
							/>
							<MenuList minW="max-content" px="2">
								<MenuItem onClick={editHandler}>Edit</MenuItem>
								<MenuItem color="red.700" onClick={deleteHandler}>
									Delete
								</MenuItem>
							</MenuList>
						</Menu>
					) : null}
					{comment.editable ? (
						<ButtonGroup mt="3" fontSize="12px">
							<Button
								variant="brand"
								fontSize="14px"
								onClick={updateComment}
								disabled={!comment.content.length}
							>
								Update
							</Button>
							<Button
								colorScheme="red"
								fontSize="14px"
								onClick={() => setComment({ ...comment, content: '', editable: false })}
							>
								Cancel
							</Button>
						</ButtonGroup>
					) : null}
				</Box>
			</HStack>
		</>
	);
};

export { Comment };
