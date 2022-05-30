import React, { useState } from 'react';
import {
	Button,
	Checkbox,
	Container,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Link,
	Text,
	useToast,
} from '@chakra-ui/react';
import { Link as ReachLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'Redux/Thunk';

const Login = () => {
	const [user, setUser] = useState({ username: '', password: '', rememberMe: false });
	const dispatch = useDispatch();
	const { isLoading } = useSelector((state) => state.auth);
	const navigate = useNavigate();
	const toast = useToast();

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

	const loginHandler = async (e) => {
		if (user.username && user.password) {
			e.preventDefault();
			const { payload } = await dispatch(login(user));
			if (payload?.status === 200) {
				if (user.rememberMe) {
					localStorage.setItem('token', payload.data.encodedToken);
					localStorage.setItem('user', JSON.stringify(payload.data.foundUser));
					navigate('/home');
					toast({
						status: 'success',
						duration: 5000,
						title: `Welcome back ${payload.data.foundUser.firstName}`,
						position: 'bottom-right',
						isClosable: true,
					});
				}
			} else {
				toast({
					status: 'error',
					duration: 5000,
					title: payload.data.errors[0],
					position: 'bottom-right',
					isClosable: true,
				});
			}
		}
	};

	return (
		<>
			<Container>
				<Heading as="h1" mt="32" mb="4" textAlign="center" color="brand.500" fontStyle="italic">
					Socially! A place to meet all your friends
				</Heading>
				<Flex justifyContent="center" maxW={320} m="auto" flexDir="column" as="form">
					<FormControl>
						<FormLabel my="3">Username</FormLabel>
						<Input
							type="text"
							placeholder="Oogway"
							name="username"
							value={user.username}
							onChange={inputHandler}
							required
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
							required
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
					<Button
						w="full"
						mb="4"
						variant="brand"
						type="submit"
						onClick={loginHandler}
						isLoading={isLoading}
					>
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
