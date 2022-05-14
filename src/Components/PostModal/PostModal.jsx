import React from 'react';
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
} from '@chakra-ui/react';
import { BiImage } from 'react-icons/bi';

const PostModal = ({ onClose, isOpen }) => {
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
