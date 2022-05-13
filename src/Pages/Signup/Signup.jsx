import {
	Button,
	Checkbox,
	Flex,
	FormControl,
	FormLabel,
	GridItem,
	Input,
	Link,
	SimpleGrid,
	Text,
} from '@chakra-ui/react';
import React from 'react';

const Signup = () => {
	return (
		<Flex h="100vh" justify="center" align="center">
			<SimpleGrid columnGap="2" columns="2" maxW={320}>
				<GridItem colSpan="1">
					<FormControl>
						<FormLabel my="3">Firstname</FormLabel>
						<Input type="text" placeholder="John" />
					</FormControl>
				</GridItem>
				<GridItem colSpan="1">
					<FormControl>
						<FormLabel my="3">Lastname</FormLabel>
						<Input type="text" placeholder="Doe" />
					</FormControl>
				</GridItem>
				<GridItem colSpan="2">
					<FormControl>
						<FormLabel my="3">Username</FormLabel>
						<Input type="text" placeholder="Oogway" />
					</FormControl>
				</GridItem>
				<GridItem colSpan="2">
					<FormControl>
						<FormLabel my="3">Password</FormLabel>
						<Input type="text" placeholder="********" />
					</FormControl>
					<Checkbox type="checkbox" alignSelf="flex-start" my="3">
						Accept Terms And Conditions
					</Checkbox>
					<Button w="full" mb="4" variant="brand">
						Signup
					</Button>
					<Text>
						Already a user?
						<Link href="/login" color="brand.500" px="2">
							Login
						</Link>
					</Text>
				</GridItem>
			</SimpleGrid>
		</Flex>
	);
};

export { Signup };
