import React, { useState } from 'react';
import {
	Button,
	Flex,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Textarea,
	Text,
} from '@chakra-ui/react';
import { BiImage } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { newPost } from 'Redux/Thunk';

const PostModal = ({ onClose, isOpen }) => {
	const [postData, setPostData] = useState({ content: '' });
	const { token } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const newPostHandler = async () => {
		if (postData.content.trim()) {
			await dispatch(newPost({ post: postData, token }));
			setPostData({ ...postData, content: '' });
			onClose();
		}
	};

	const cancelHandler = () => {
		setPostData({ ...postData, content: '' });
		onClose();
	};

	return (
		<>
			<Modal onClose={cancelHandler} isOpen={isOpen} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Add New Post</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Textarea
							resize="none"
							rows="6"
							value={postData.content}
							onChange={(e) => setPostData((prev) => ({ ...prev, content: e.target.value }))}
							maxLength="200"
							placeholder="How are you feeling today"
							autoFocus
						></Textarea>
					</ModalBody>
					<ModalFooter>
						<Flex position="relative" align="center" mr="auto">
							<FormLabel cursor="pointer">
								<Input
									type="file"
									position="absolute"
									opacity="0"
									bgColor="red.100"
									p="0"
									visibility="hidden"
								/>
								<BiImage fontSize="32px" />
							</FormLabel>
						</Flex>
						<Text mr="auto">{postData.content.length} / 200</Text>
						<Button onClick={newPostHandler} variant="brand" mr="4">
							Post
						</Button>
						<Button onClick={cancelHandler}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export { PostModal };
