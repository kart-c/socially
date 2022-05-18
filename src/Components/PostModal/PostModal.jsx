import React, { useEffect, useRef, useState } from 'react';
import {
	Button,
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
import { useDispatch, useSelector } from 'react-redux';
import { editPost, newPost } from 'Redux/Thunk';
import { closeModal } from 'Redux/Slice';

const PostModal = ({ onClose, isOpen }) => {
	const { postData, postId } = useSelector((state) => state.posts);
	const [length, setLength] = useState(0);
	const postRef = useRef();

	const { token } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (postData.isEdited) {
			setLength(postData.content.length);
		}
	}, [postData.content.length, postData.isEdited]);

	const postModalHandler = async () => {
		if (postRef.current.value.trim()) {
			if (postData.isEdited) {
				await dispatch(
					editPost({ post: { postData, content: postRef.current.value }, token, _id: postId })
				);
			} else {
				await dispatch(newPost({ post: { ...postData, content: postRef.current.value }, token }));
			}
			setLength(0);
			onClose();
		} else {
			// PUT A ALERT
		}
	};

	const cancelHandler = () => {
		dispatch(closeModal());
		setLength(0);
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
