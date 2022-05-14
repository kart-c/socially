import React from 'react';
import {
	Avatar,
	Button,
	Flex,
	Heading,
	IconButton,
	Link,
	Text,
	Tooltip,
	VStack,
} from '@chakra-ui/react';
import { MdLogout } from 'react-icons/md';
import { PgWrapper, Post } from 'Components';

const Profile = () => {
	return (
		<PgWrapper>
			<Flex
				p="4"
				align="flex-start"
				gap="3"
				wrap={{ base: 'wrap', sm: 'nowrap' }}
				borderBottom="1px solid"
				borderColor="gray.200"
			>
				<Avatar name="Kartik Choudhary" src="https://" size="lg" />
				<VStack align="flex-start">
					<Heading as="h2" fontSize="24px">
						Kartik Choudhary
					</Heading>
					<Text as="span" color="gray.300" fontSize="14px">
						@kart_c11
					</Text>
					<Text>A novice web developer</Text>
					<Flex gap="4">
						<Text as="span">0 Posts</Text>
						<Text as="span">0 Followers</Text>
						<Text as="span">0 Following</Text>
					</Flex>
					<Link href="https://github.com/kart-c" isExternal color="brand.500" fontSize="14px">
						https://github.com/kart-c
					</Link>
				</VStack>
				<Flex
					flexDir={{ base: 'row', sm: 'column' }}
					align="flex-end"
					gap="4"
					ml="auto"
					w={{ base: '100%', sm: 'auto' }}
				>
					<Button variant="outline" border="2px solid" borderColor="brand.500">
						Edit
					</Button>
					<Tooltip label="Logout">
						<IconButton
							icon={<MdLogout />}
							aria-label="Logout"
							border="2px solid"
							borderColor="brand.500"
							variant="outline"
						/>
					</Tooltip>
				</Flex>
			</Flex>
			<Post />
			<Post />
		</PgWrapper>
	);
};

export { Profile };
