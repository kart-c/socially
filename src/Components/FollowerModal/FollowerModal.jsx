import React from 'react';
import {
	Avatar,
	Box,
	HStack,
	Modal,
	ModalBody,
	ModalContent,
	ModalOverlay,
	Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const FollowerModal = ({ followerIsOpen, followerOnClose, modalUsers, setModalUsers }) => {
	const navigate = useNavigate();

	return (
		<>
			<Modal isOpen={followerIsOpen} onClose={followerOnClose} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalBody>
						{modalUsers.map((user) => (
							<HStack
								key={user._id}
								minH="12"
								px="4"
								borderBottom="1px solid"
								borderColor="gray.400"
								cursor="pointer"
								_last={{
									borderBottom: '0',
								}}
								onClick={() => {
									navigate(`/profile/${user.username}`);
									followerOnClose();
									setModalUsers([]);
								}}
							>
								<Avatar
									src={user.profilePic}
									alt={user.firstName + ' ' + user.lastName}
									size="sm"
								/>
								<Box>
									<Text as="span">
										{user.firstName} {user.lastName}{' '}
									</Text>
									<Text as="span" fontSize="sm" color="gray.300">
										@{user.username}
									</Text>
								</Box>
							</HStack>
						))}
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export { FollowerModal };
