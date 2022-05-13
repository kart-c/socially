import { Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import { FiHome, FiHash, FiBookmark, FiUser } from 'react-icons/fi';

const LeftNav = () => {
	const activeLink = ({ isActive }) => (isActive ? { fontWeight: 'bold' } : '');

	return (
		<VStack as="nav" w="25%" p="4" pl="12" align="flex-start" gap="3" pt="6">
			<Heading as="h1" my="0" color="brand.500">
				<Link to="/">Socially</Link>
			</Heading>

			<Flex
				as={NavLink}
				style={activeLink}
				to="/"
				align="center"
				fontSize="20"
				pl="4"
				pr="5"
				pt="2"
				pb="3"
				borderRadius="100px"
				_hover={{
					bgColor: 'gray.200',
				}}
			>
				<FiHome display="inline" />
				<Text as="span" pt="1" ml="3">
					Home
				</Text>
			</Flex>
			<Flex
				as={NavLink}
				// style={activeLink}
				to="/"
				align="center"
				fontSize="20"
				pl="4"
				pr="5"
				pt="2"
				pb="3"
				borderRadius="100px"
				_hover={{
					bgColor: 'gray.200',
				}}
			>
				<FiHash display="inline" />
				<Text as="span" pt="1" ml="3">
					Explore
				</Text>
			</Flex>
			<Flex
				as={NavLink}
				// style={activeLink}
				to="/"
				align="center"
				fontSize="20"
				pl="4"
				pr="5"
				pt="2"
				pb="3"
				borderRadius="100px"
				_hover={{
					bgColor: 'gray.200',
				}}
			>
				<FiBookmark display="inline" />
				<Text as="span" pt="1" ml="3">
					Bookmark
				</Text>
			</Flex>
			<Flex
				as={NavLink}
				// style={activeLink}
				to="/"
				align="center"
				fontSize="20"
				pl="4"
				pr="5"
				pt="2"
				pb="3"
				borderRadius="100px"
				_hover={{
					bgColor: 'gray.200',
				}}
			>
				<FiUser display="inline" />
				<Text as="span" pt="1" ml="3">
					Profile
				</Text>
			</Flex>
			<Button variant="brand" w="90%" borderRadius="100px" py="6">
				New Post
			</Button>
		</VStack>
	);
};

export { LeftNav };
