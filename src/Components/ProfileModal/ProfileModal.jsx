import React, { useState } from 'react';
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
	Textarea,
} from '@chakra-ui/react';
import { AiFillCamera } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { editProfile } from 'Redux/Thunk';
import { Loader } from 'Components';

const ProfileModal = ({ onClose, isOpen, name, defaultdata, setProfileUpdate }) => {
	const [userData, setUserData] = useState({
		bio: defaultdata.userBio,
		link: defaultdata.userLink,
		profilePic: defaultdata.profile,
	});
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const { token, isLoading } = useSelector((state) => state.auth);

	const inputHandler = (e) => {
		const {
			target: { value },
			target: { name },
		} = e;
		setUserData((prev) => ({ ...prev, [name]: value }));
	};

	const cloudinaryHandler = async (e) => {
		setLoading(true);
		try {
			const data = new FormData();
			data.append('file', e);
			data.append('upload_preset', 'zet3aa3f');
			await fetch('https://api.cloudinary.com/v1_1/obi-wan/image/upload', {
				method: 'POST',
				body: data,
			})
				.then((res) => res.json())
				.then((data) => {
					setUserData((prev) => ({ ...prev, profilePic: data.url }));
				})
				.catch((error) => console.error(error));
		} catch (error) {
			console.error('error', error);
		} finally {
			setLoading(false);
		}
	};

	const updateHandler = (e) => {
		e.preventDefault();
		onClose();
		// setProfileUpdate((prev) => !prev);
		dispatch(editProfile({ userData, token }));
	};

	return (
		<>
			{isLoading && <Loader />}
			<Modal onClose={loading ? null : onClose} isOpen={isOpen} isCentered>
				<ModalOverlay />
				<ModalContent as="form">
					<ModalBody p="4" display="flex" flexDir="column" gap="3">
						<HStack gap="6">
							<Text as="span">Avatar</Text>
							<Box position="relative">
								<Avatar name={name} src={userData.profilePic} size="lg" />
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
										onChange={(e) => cloudinaryHandler(e.target.files[0])}
									/>
									<AiFillCamera />
								</FormLabel>
							</Box>
						</HStack>
						<Flex align="flex-start">
							<Text as="span">Bio</Text>
							<Textarea
								placeholder="I like to do . . ."
								width="80%"
								marginLeft="auto"
								resize="none"
								name="bio"
								value={userData.bio}
								onChange={inputHandler}
							/>
						</Flex>
						<Flex align="center">
							<Text as="span">Website</Text>
							<Input
								placeholder="Checkout my website at . . ."
								width="80%"
								marginLeft="auto"
								type="url"
								name="link"
								value={userData.link}
								onChange={inputHandler}
							/>
						</Flex>
					</ModalBody>
					<ModalFooter gap="4">
						<Button onClick={updateHandler} variant="brand" type="submit" isLoading={loading}>
							Update
						</Button>
						<Button onClick={onClose} type="button">
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export { ProfileModal };
