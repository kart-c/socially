import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import error404 from 'Assets/404.png';

const Error = () => {
	const navigate = useNavigate();

	return (
		<>
			<Box position="fixed" zIndex="10" h="100vh" w="100%" bgColor="white" textAlign="center">
				<Text pt="8" pb="4" fontSize="2xl">
					Something Went Wrong!!
				</Text>
				<Image src={error404} alt="Error" maxH="480" objectFit="contain" m="auto" />
				<Button variant="brand" onClick={() => navigate('/')}>
					Go Back Home
				</Button>
			</Box>
		</>
	);
};

export { Error };
