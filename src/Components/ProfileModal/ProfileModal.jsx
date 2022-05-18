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
import { saveToCloudinary } from 'Utils/saveToCloudinary';
import { btnLoading } from 'Redux/Slice';

const ProfileModal = ({ onClose, isOpen, name, defaultdata }) => {
	const [userData, setUserData] = useState({
		bio: defaultdata.bio,
		link: defaultdata.link,
		profilePic: '',
		uploadedPic: {},
	});
	const dispatch = useDispatch();
	const { token, btnStatus } = useSelector((state) => state.auth);

	let reader = new FileReader();

	const inputHandler = (e) => {
		const {
			target: { value },
			target: { name },
		} = e;
		setUserData((prev) => ({ ...prev, [name]: value }));
	};

	const profilePicHandler = (e) => {
		reader.readAsDataURL(e.target.files[0]);
		reader.onload = () => {
			if (reader.readyState === 2) {
				setUserData((prev) => ({
					...prev,
					profilePic: reader.result,
					uploadedPic: e.target.files[0],
				}));
			}
		};
	};

	const updateUserWithPic = async (userData) => {
		try {
			const response = await dispatch(editProfile({ userData, token }));
			if (response.payload.status === 201) {
				onClose();
				setUserData(response.payload.data.user);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const updateHandler = async (e) => {
		e.preventDefault();
		try {
			if (!userData.profilePic) {
				const response = await dispatch(
					editProfile({ userData: { ...userData, profilePic: defaultdata.profilePic }, token })
				);
				if (response.payload.status) {
					setUserData({ ...response.payload.data.user, profilePic: '' });
					onClose();
				}
			} else {
				dispatch(btnLoading());
				await saveToCloudinary({
					profilePic: userData.profilePic,
					defaultdata,
					updateUserWithPic,
				});
			}
		} catch (error) {
			console.error(error);
		}
	};

	const closeHandler = () => {
		setUserData(defaultdata);
		onClose();
	};

	return (
		<>
			<Modal onClose={btnStatus === 'loading' ? null : onClose} isOpen={isOpen} isCentered>
				<ModalOverlay onClose={btnStatus === 'loading' ? null : onClose} />
				<ModalContent as="form">
					<ModalBody p="4" display="flex" flexDir="column" gap="3">
						<HStack gap="6">
							<Text as="span">Avatar</Text>
							<Box position="relative">
								<Avatar name={name} src={userData.profilePic || defaultdata.profilePic} size="lg" />
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
										accept="image/*"
										opacity="0"
										bgColor="red.100"
										p="0"
										visibility="hidden"
										position="absolute"
										left="0"
										bottom="-5px"
										onChange={profilePicHandler}
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
						<Button
							onClick={updateHandler}
							variant="brand"
							type="submit"
							isLoading={btnStatus === 'loading'}
						>
							Update
						</Button>
						<Button onClick={closeHandler} type="button" isDisabled={btnStatus === 'loading'}>
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export { ProfileModal };
