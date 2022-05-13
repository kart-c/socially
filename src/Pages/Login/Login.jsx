import React from 'react';
import {
	Button,
	Checkbox,
	Container,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Link,
	Text,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const Login = () => {
	return (
		<Container maxW={320}>
			<Flex height="100vh" justifyContent="center" maxW="full" flexDir="column">
				<FormControl>
					<FormLabel my="3">Username</FormLabel>
					<Input type="text" placeholder="Oogway" />
				</FormControl>
				<FormControl>
					<FormLabel my="3">Password</FormLabel>
					<Input type="password" placeholder="********" />
				</FormControl>
				<Checkbox type="checkbox" alignSelf="flex-start" my="3">
					Remember Me
				</Checkbox>
				<Button w="full" mb="4" variant="brand">
					Login
				</Button>
				<Text>
					Not a user?
					<Link as={ReachLink} to="/signup" color="brand.500" px="2">
						Signup
					</Link>
				</Text>
			</Flex>
		</Container>
	);
};

export { Login };
