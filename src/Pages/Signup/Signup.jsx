import React, { useState } from 'react';
import {
	Button,
	Checkbox,
	Container,
	Flex,
	FormControl,
	FormLabel,
	GridItem,
	Heading,
	Input,
	Link,
	SimpleGrid,
	Text,
	useToast,
} from '@chakra-ui/react';
import { Link as ReachLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from 'Redux/Thunk';

const Signup = () => {
	const [user, setUser] = useState({
		username: '',
		password: '',
		firstName: '',
		lastName: '',
		checkbox: false,
	});
	const { isLoading } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const toast = useToast();

	const inputHandler = (e) => {
		const {
			target: { name },
			target: { value },
		} = e;
		setUser((prev) => ({ ...prev, [name]: value }));
	};

	const signupHandler = async (e) => {
		if (user.firstName && user.lastName && user.username && user.password && user.checkbox) {
			e.preventDefault();
			const { payload } = await dispatch(signup(user));
			if (payload?.status === 201) {
				navigate('/home');
				toast({
					status: 'success',
					duration: 5000,
					title: `Welcome ${payload.data.createdUser.firstName}`,
					position: 'bottom-right',
					isClosable: true,
				});
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
				<Flex justify="center" align="center" as="form">
					<SimpleGrid columnGap="2" columns="2" maxW={320}>
						<GridItem colSpan="1">
							<FormControl>
								<FormLabel my="3">Firstname</FormLabel>
								<Input
									type="text"
									placeholder="John"
									value={user.firstName}
									name="firstName"
									onChange={inputHandler}
									required
								/>
							</FormControl>
						</GridItem>
						<GridItem colSpan="1">
							<FormControl>
								<FormLabel my="3">Lastname</FormLabel>
								<Input
									type="text"
									placeholder="Doe"
									value={user.lastName}
									name="lastName"
									onChange={inputHandler}
									required
								/>
							</FormControl>
						</GridItem>
						<GridItem colSpan="2">
							<FormControl>
								<FormLabel my="3">Username</FormLabel>
								<Input
									type="text"
									placeholder="Oogway"
									value={user.username}
									name="username"
									onChange={inputHandler}
									required
								/>
							</FormControl>
						</GridItem>
						<GridItem colSpan="2">
							<FormControl>
								<FormLabel my="3">Password</FormLabel>
								<Input
									type="password"
									placeholder="********"
									value={user.password}
									name="password"
									onChange={inputHandler}
									required
								/>
							</FormControl>
							<Checkbox
								type="checkbox"
								alignSelf="flex-start"
								my="3"
								isChecked={user.checkbox}
								onChange={() => setUser((prev) => ({ ...prev, checkbox: !prev.checkbox }))}
								required
							>
								Accept Terms And Conditions
							</Checkbox>
							<Button
								w="full"
								mb="4"
								variant="brand"
								type="submit"
								onClick={signupHandler}
								isLoading={isLoading}
							>
								Signup
							</Button>
							<Text>
								Already a user?
								<Link as={ReachLink} to="/" color="brand.500" px="2">
									Login
								</Link>
							</Text>
						</GridItem>
					</SimpleGrid>
				</Flex>
			</Container>
		</>
	);
};

export { Signup };
