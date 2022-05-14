import React from 'react';
import { Avatar, Box, Heading, HStack, IconButton, Text } from '@chakra-ui/react';
import { FaEllipsisV } from 'react-icons/fa';

const Comment = () => {
	return (
		<>
			<HStack mt="3" gap="2" align="flex-start">
				<Avatar name="Kartik Choudhary" src="https://" size="sm" fontSize="10px" />
				<Box bgColor="gray.200" p="3" flexGrow="1" borderRadius="lg" position="relative">
					<Heading as="h4" fontWeight="700" fontSize="16" mb="2">
						Kartik Choudhary{' '}
						<Text
							as="span"
							fontWeight="400"
							fontSize="14"
							color="gray.300"
							display={{ base: 'none', mySm: 'inline' }}
						>
							@kart_c11
						</Text>
					</Heading>
					<Text>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis expedita officiis
						earum mollitia doloremque
					</Text>
					<IconButton
						position="absolute"
						right="0"
						top="1"
						bgColor="transparent"
						_active={{
							opacity: '0.7',
						}}
						borderRadius="full"
						aria-label="options"
						icon={<FaEllipsisV fontSize="14px" />}
						justifySelf="flex-end"
					/>
				</Box>
			</HStack>
		</>
	);
};

export { Comment };
