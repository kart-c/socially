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
	Flex,
	FormLabel,
	Input,
	useToast,
} from '@chakra-ui/react';
import { BiImage } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { editPost, newPost } from 'Redux/Thunk';
import { closeModal } from 'Redux/Slice';
import { saveMediaToCloudinary } from 'Utils/saveToCloudinary';

const PostModal = ({ onClose, isOpen }) => {
	const { postData, postId, posts } = useSelector((state) => state.posts);
	const [length, setLength] = useState(0);
	const [loading, setLoading] = useState(false);
	const postRef = useRef();
	const { token } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const [media, setMedia] = useState();
	const toast = useToast();
	let reader = new FileReader();
	const currentPost = posts.find((post) => post._id === postId);

	useEffect(() => {
		if (postData.isEdited) {
			setLength(postData.content.length);
		}
	}, [postData]);

	useEffect(() => {
		if (postData.isEdited) {
			setMedia(currentPost.media);
		}
	}, [currentPost, postData.isEdited]);

	const postModalHandler = async () => {
		if (postRef.current.value.trim()) {
			setLoading(true);
			if (postData.isEdited) {
				if (media) {
					const postHandler = async (media) => {
						const response = await dispatch(
							editPost({
								post: { postData, content: postRef.current.value, media },
								token,
								_id: postId,
							})
						);
						if (response.payload.status) {
							setLength(0);
							setMedia('');
							onClose();
							setLoading(false);
						}
					};
					await saveMediaToCloudinary(media, postHandler);
				} else {
					const response = await dispatch(
						editPost({
							post: { postData, content: postRef.current.value, media: '' },
							token,
							_id: postId,
						})
					);
					if (response.payload.status) {
						setLength(0);
						setMedia('');
						onClose();
						setLoading(false);
					}
				}
			} else {
				if (media) {
					const postHandler = async (media) => {
						const response = await dispatch(
							newPost({ post: { ...postData, content: postRef.current.value, media }, token })
						);
						if (response.payload.status) {
							setLength(0);
							setMedia('');
							onClose();
							setLoading(false);
						}
					};
					await saveMediaToCloudinary(media, postHandler);
				} else {
					const response = await dispatch(
						newPost({ post: { ...postData, content: postRef.current.value, media: '' }, token })
					);
					if (response.payload.status) {
						setLength(0);
						setMedia('');
						onClose();
						setLoading(false);
					}
				}
			}
		} else {
			toast({
				status: 'error',
				duration: 5000,
				title: 'Post content cannot empty',
				position: 'bottom-right',
				isClosable: true,
			});
		}
	};

	const cancelHandler = () => {
		if (!loading) {
			dispatch(closeModal());
			setMedia('');
			setLength(0);
			onClose();
		}
	};

	const mediaHandler = (e) => {
		reader.readAsDataURL(e.target.files[0]);
		reader.onprogress = () => {
			if (e.target.files[0].size <= 5242880) {
				reader.onload = () => {
					if (reader.readyState === 2) {
						setMedia(reader.result);
					}
				};
			} else {
				toast({
					status: 'error',
					duration: 5000,
					title: 'File size should be below 5MB',
					position: 'bottom-right',
					isClosable: true,
				});
				reader.abort();
				setMedia('');
			}
		};
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
							<FormLabel cursor="pointer" mb="0" mr="2">
								<Input
									type="file"
									position="absolute"
									opacity="0"
									bgColor="red.100"
									p="0"
									visibility="hidden"
									onChange={mediaHandler}
								/>
								<BiImage fontSize="32px" />
							</FormLabel>
							{media && (
								<Button
									rightIcon={<AiOutlineClose fontSize="16px" />}
									size="sm"
									onClick={() => setMedia('')}
								>
									Remove
								</Button>
							)}
						</Flex>
						<Text mr="auto">{length} / 200</Text>
						<Button onClick={postModalHandler} variant="brand" mr="2" isLoading={loading}>
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
