import React, { useState } from 'react';
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
	const [user, setUser] = useState({ username: '', password: '', rememberMe: false });

	const inputHandler = (e) => {
		const {
			target: { name },
			target: { value },
		} = e;
		setUser((prev) => ({ ...prev, [name]: value }));
	};
	const testUserHandler = () =>
		setUser((prev) => ({
			...prev,
			username: 'adarshbalika',
			password: 'adarshBalika123',
			rememberMe: true,
		}));

	return (
		<>
			<Container maxW={320}>
				<Flex height="100vh" justifyContent="center" maxW="full" flexDir="column">
					<FormControl>
						<FormLabel my="3">Username</FormLabel>
						<Input
							type="text"
							placeholder="Oogway"
							name="username"
							value={user.username}
							onChange={inputHandler}
						/>
					</FormControl>
					<FormControl>
						<FormLabel my="3">Password</FormLabel>
						<Input
							type="password"
							placeholder="********"
							name="password"
							value={user.password}
							onChange={inputHandler}
						/>
					</FormControl>
					<Checkbox
						type="checkbox"
						alignSelf="flex-start"
						my="3"
						isChecked={user.rememberMe}
						value={user.rememberMe}
						onChange={() => setUser((prev) => ({ ...prev, rememberMe: !prev.rememberMe }))}
					>
						Remember Me
					</Checkbox>
					<Button w="full" mb="4" colorScheme="orange" onClick={testUserHandler}>
						Guest User
					</Button>
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
		</>
	);
};

export { Login };
