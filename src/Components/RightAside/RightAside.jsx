import React from 'react';
import { Avatar, Button, Flex, HStack, Text, VStack } from '@chakra-ui/react';

const RightAside = () => {
	return (
		<VStack
			as="aside"
			ml="4"
			gap="3"
			mt="6"
			bgColor="gray.100"
			borderRadius="lg"
			align="flex-start"
			h="max-content"
			display={{ base: 'none', myMd: 'flex' }}
		>
			<Text m="4">People you may know</Text>
			<Flex
				w="full"
				borderBottom="1px solid"
				borderColor="gray.200"
				p="4"
				pt="0"
				gap="2"
				align={{ base: 'flex-start', lg: 'center' }}
				flexDir={{
					base: 'column',
					lg: 'row',
				}}
			>
				<HStack>
					<Avatar name="Kartik Choudhary" src="https://" size="sm" />
					<VStack align="flex-start" spacing="0" ml="2">
						<Text as="span" fontSize="16px">
							Kartik Choudhary
						</Text>
						<Text as="span" fontSize="14px" color="gray.300">
							@kart_c11
						</Text>
					</VStack>
				</HStack>
				<Button variant="brand" m="0" ml={{ base: '0', lg: 'auto' }} size="sm">
					Follow
				</Button>
			</Flex>
			<Flex
				w="full"
				borderBottom="1px solid"
				borderColor="gray.200"
				p="4"
				pt="0"
				gap="2"
				align={{ base: 'flex-start', lg: 'center' }}
				flexDir={{
					base: 'column',
					lg: 'row',
				}}
			>
				<HStack>
					<Avatar name="Kartik Choudhary" src="https://" size="sm" />
					<VStack align="flex-start" spacing="0" ml="2">
						<Text as="span" fontSize="16px">
							Kartik Choudhary
						</Text>
						<Text as="span" fontSize="14px" color="gray.300">
							@kart_c11
						</Text>
					</VStack>
				</HStack>
				<Button variant="brand" m="0" ml={{ base: '0', lg: 'auto' }} size="sm">
					Follow
				</Button>
			</Flex>
			<Flex
				w="full"
				borderBottom="1px solid"
				borderColor="gray.200"
				p="4"
				pt="0"
				gap="2"
				align={{ base: 'flex-start', lg: 'center' }}
				flexDir={{
					base: 'column',
					lg: 'row',
				}}
			>
				<HStack>
					<Avatar name="Kartik Choudhary" src="https://" size="sm" />
					<VStack align="flex-start" spacing="0" ml="2">
						<Text as="span" fontSize="16px">
							Kartik Choudhary
						</Text>
						<Text as="span" fontSize="14px" color="gray.300">
							@kart_c11
						</Text>
					</VStack>
				</HStack>
				<Button variant="brand" m="0" ml={{ base: '0', lg: 'auto' }} size="sm">
					Follow
				</Button>
			</Flex>
			<Flex
				w="full"
				borderBottom="1px solid"
				borderColor="gray.200"
				p="4"
				pt="0"
				gap="2"
				align={{ base: 'flex-start', lg: 'center' }}
				flexDir={{
					base: 'column',
					lg: 'row',
				}}
			>
				<HStack>
					<Avatar name="Kartik Choudhary" src="https://" size="sm" />
					<VStack align="flex-start" spacing="0" ml="2">
						<Text as="span" fontSize="16px">
							Kartik Choudhary
						</Text>
						<Text as="span" fontSize="14px" color="gray.300">
							@kart_c11
						</Text>
					</VStack>
				</HStack>
				<Button variant="brand" m="0" ml={{ base: '0', lg: 'auto' }} size="sm">
					Follow
				</Button>
			</Flex>
			<Flex
				w="full"
				borderBottom="1px solid"
				borderColor="gray.200"
				p="4"
				pt="0"
				gap="2"
				align={{ base: 'flex-start', lg: 'center' }}
				flexDir={{
					base: 'column',
					lg: 'row',
				}}
			>
				<HStack>
					<Avatar name="Kartik Choudhary" src="https://" size="sm" />
					<VStack align="flex-start" spacing="0" ml="2">
						<Text as="span" fontSize="16px">
							Kartik Choudhary
						</Text>
						<Text as="span" fontSize="14px" color="gray.300">
							@kart_c11
						</Text>
					</VStack>
				</HStack>
				<Button variant="brand" m="0" ml={{ base: '0', lg: 'auto' }} size="sm">
					Follow
				</Button>
			</Flex>
		</VStack>
	);
};

export { RightAside };
