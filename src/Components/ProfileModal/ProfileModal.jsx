import React from 'react';
import {
	Avatar,
	Box,
	Button,
	Flex,
	FormLabel,
	HStack,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	Text,
} from '@chakra-ui/react';
import { AiFillCamera } from 'react-icons/ai';

const ProfileModal = ({ onClose, isOpen }) => {
	return (
		<>
			<Modal onClose={onClose} isOpen={isOpen} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalBody p="4" display="flex" flexDir="column" gap="3">
						<HStack gap="6">
							<Text as="span">Avatar</Text>
							<Box position="relative">
								<Avatar name="Kartik Choudhary" src="https://" size="lg" />
								<FormLabel
									cursor="pointer"
									position="absolute"
									left="40px"
									bottom="-10px"
									padding="1.5"
									bgColor="#fff"
									height="max-content"
									borderRadius="full"
								>
									<Input
										type="file"
										opacity="0"
										bgColor="red.100"
										p="0"
										visibility="hidden"
										position="absolute"
										left="0"
										bottom="-5px"
									/>
									<AiFillCamera />
								</FormLabel>
							</Box>
						</HStack>
						<Flex align="center">
							<Text as="span">Bio</Text>
							<Input type="text" placeholder="I like to do . . ." width="80%" marginLeft="auto" />
						</Flex>
						<Flex align="center">
							<Text as="span">Website</Text>
							<Input
								type="text"
								placeholder="Checkout my portfolio at . . ."
								width="80%"
								marginLeft="auto"
							/>
						</Flex>
					</ModalBody>
					<ModalFooter gap="4">
						<Button onClick={onClose} variant="brand">
							Update
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export { ProfileModal };
