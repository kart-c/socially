import React, { useRef, useState } from 'react';
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
import { editPost, newPost } from 'Redux/Thunk';
import { closeModal } from 'Redux/Slice';

const PostModal = ({ onClose, isOpen }) => {
	const { postData, postId } = useSelector((state) => state.posts);
	const [length, setLength] = useState(0);
	const postRef = useRef();

	const { token } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const postModalHandler = async () => {
		if (postRef.current.value.trim()) {
			if (postData.isEdited) {
				await dispatch(
					editPost({ post: { postData, content: postRef.current.value }, token, _id: postId })
				);
			} else {
				await dispatch(newPost({ post: { ...postData, content: postRef.current.value }, token }));
			}
			onClose();
		} else {
			// PUT A ALERT
		}
	};

	const cancelHandler = () => {
		dispatch(closeModal());
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
							ref={postRef}
							defaultValue={postData.isEdited ? postData.content : ''}
							onChange={(e) => setLength(e.target.value.length)}
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
									accept="image/*,video/*"
									position="absolute"
									opacity="0"
									bgColor="red.100"
									p="0"
									visibility="hidden"
								/>
								<BiImage fontSize="32px" />
							</FormLabel>
						</Flex>
						<Text mr="auto">{length} / 200</Text>
						<Button onClick={postModalHandler} variant="brand" mr="4">
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
