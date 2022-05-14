import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import { FiHome, FiHash, FiBookmark, FiUser, FiPlusCircle } from 'react-icons/fi';

const LeftNav = ({ onOpen }) => {
	const activeLink = ({ isActive }) => (isActive ? { fontWeight: 'bold' } : '');

	return (
		<Flex
			as="nav"
			w="300"
			align="flex-start"
			gap="3"
			mt="6"
			height="max-content"
			zIndex="2"
			p={{ base: '2', mySm: '4' }}
			pt={{ base: '2', mySm: '0' }}
			position={{ mySm: 'sticky', base: 'fixed' }}
			top={{ base: 'unset', mySm: '6' }}
			bottom={{ base: '0', mySm: 'unset' }}
			flexDir={{
				base: 'row',
				mySm: 'column',
			}}
			right={{
				base: 0,
				mySm: 'initial',
			}}
			left={{
				base: 0,
				mySm: 'initial',
			}}
			justify={{
				base: 'space-evenly',
				mySm: 'unset',
			}}
			bgColor={{
				base: 'gray.100',
				mySm: 'initial',
			}}
		>
			<Heading as="h1" my="0" color="brand.500" ml="4" display={{ base: 'none', mySm: 'block' }}>
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
				<Text as="span" pt="1" ml="3" display={{ base: 'none', mySm: 'block' }}>
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
				<Text as="span" pt="1" ml="3" display={{ base: 'none', mySm: 'block' }}>
					Explore
				</Text>
			</Flex>
			<Flex
				as={'button'}
				align="center"
				fontSize="20"
				pl="4"
				pr="5"
				pt="2"
				pb="3"
				color="brand.500"
				borderRadius="100px"
				display={{
					base: 'flex',
					mySm: 'none',
				}}
				_hover={{
					bgColor: 'gray.200',
				}}
				onClick={onOpen}
			>
				<FiPlusCircle display="inline" />
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
				<Text as="span" pt="1" ml="3" display={{ base: 'none', mySm: 'block' }}>
					Bookmark
				</Text>
			</Flex>
			<Flex
				as={NavLink}
				// style={activeLink}
				to="/login"
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
				<Text as="span" pt="1" ml="3" display={{ base: 'none', mySm: 'block' }}>
					Profile
				</Text>
			</Flex>
			<Button
				variant="brand"
				w="90%"
				borderRadius="100px"
				py="6"
				display={{ base: 'none', mySm: 'inline-flex' }}
				onClick={onOpen}
			>
				New Post
			</Button>
		</Flex>
	);
};

export { LeftNav };
