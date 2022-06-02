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
import { useSelector } from 'react-redux';

const FollowerModal = ({ followerIsOpen, followerOnClose, modalUsers, setModalUsers }) => {
	const navigate = useNavigate();
	const { user: loggedInUser } = useSelector((state) => state.auth);

	return (
		<>
			<Modal isOpen={followerIsOpen} onClose={followerOnClose} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalBody>
						<Text as="span" display="block" mb="4" fontWeight="700">
							{modalUsers.title}
						</Text>
						{modalUsers.users.length > 0 ? (
							modalUsers.users.map((user) => (
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
										setModalUsers((prev) => ({ ...prev, users: [] }));
									}}
								>
									<Avatar
										src={
											user.username === loggedInUser.username
												? loggedInUser.profilePic
												: user.profilePic
										}
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
							))
						) : (
							<Text>No users found</Text>
						)}
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export { FollowerModal };
