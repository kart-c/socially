import React from 'react';
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { FiPlusCircle } from 'react-icons/fi';
import { PgWrapper, Post } from 'Components';

const Home = () => {
	return (
		<>
			<PgWrapper>
				<Box px="4" pb="4" borderBottom="1px solid" borderColor="gray.200">
					<Text as="h2" fontWeight="700" mb="2.5">
						Home
					</Text>
					<Flex gap="3" align="flex-end">
						<Avatar name="Kartik Choudhary" src="https://" />
						<Text fontSize="lg" mb="1" color="gray.300" cursor="text" flexGrow="1">
							What's Happening?
						</Text>
						<Box color="brand.500" bgColor="#fff" mb="1.5" cursor="pointer">
							<FiPlusCircle fontSize="24px" />
						</Box>
					</Flex>
				</Box>
				<Post />
				<Post img={'https://www.picsum.photos/300'} />
				<Post />
				<Post />
			</PgWrapper>
		</>
	);
};

export { Home };
