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

const PostModal = ({ onClose, isOpen }) => {
	const [postData, setPostData] = useState({ content: '' });
	return (
		<>
			<Modal onClose={onClose} isOpen={isOpen} isCentered>
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
						<Button onClick={onClose} variant="brand" mr="4">
							Post
						</Button>
						<Button onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export { PostModal };
