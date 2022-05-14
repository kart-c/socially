import React from 'react';
import {
	Avatar,
	Box,
	ButtonGroup,
	Flex,
	Heading,
	IconButton,
	Text,
	Tooltip,
	Image,
	Input,
	HStack,
	Button,
} from '@chakra-ui/react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaEllipsisV } from 'react-icons/fa';
import { MdOutlineBookmarkBorder, MdOutlineBookmark } from 'react-icons/md';
import { Comment } from 'Components';

const Post = ({ img }) => {
	return (
		<Box as="article" p="4" borderBottom="1px solid" borderColor="gray.200" position="relative">
			<Flex gap="3">
				<Avatar name="Kartik Choudhary" src="https://"></Avatar>
				<Flex mt="2" gap="3" flexDir="column">
					<Flex w="100%" justify="space-between">
						<Heading as="h3" fontWeight="700" fontSize="16">
							Kartik Choudhary{' '}
							<Text as="span" fontWeight="400" fontSize="14" color="gray.300">
								@kart_c11
							</Text>
						</Heading>
						<IconButton
							position="absolute"
							right="3"
							top="3"
							borderRadius="full"
							aria-label="options"
							icon={<FaEllipsisV />}
							justifySelf="flex-end"
							variant={'basic'}
						/>
					</Flex>
					<Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui hic dolor enim natus beatae
						praesentium. Impedit nisi eligendi blanditiis dignissimos tenetur, maiores repellendus
						magnam corporis ullam adipisci? Tenetur, deleniti fugit.
					</Text>
					{img ? (
						<Box w="full" h="300">
							<Image src={img} alt="placeholder" w="full" h="full" objectFit="cover" />
						</Box>
					) : null}
				</Flex>
			</Flex>
			<ButtonGroup ml="60px" mt="2">
				<Tooltip label="Like">
					<IconButton
						aria-label="Like"
						icon={<AiOutlineHeart fontSize="20px" />}
						borderRadius="full"
						variant="redIcon"
					/>
				</Tooltip>
				<Tooltip label="Like">
					<IconButton
						aria-label="Like"
						color="red.200"
						icon={<AiFillHeart fontSize="20px" />}
						borderRadius="full"
						variant="redIcon"
					/>
				</Tooltip>
				<Tooltip label="Bookmark">
					<IconButton
						aria-label="Bookmark"
						color="brand.500"
						icon={<MdOutlineBookmark fontSize="20px" />}
						borderRadius="full"
						variant="brandIcon"
					/>
				</Tooltip>
				<Tooltip label="Bookmark">
					<IconButton
						aria-label="Bookmark"
						icon={<MdOutlineBookmarkBorder fontSize="20px" />}
						borderRadius="full"
						variant="brandIcon"
					/>
				</Tooltip>
			</ButtonGroup>
			<HStack mt="1" gap="2" position="relative">
				<Avatar name="Kartik Choudhary" src="https://" size="sm" />
				<Input type="text" placeholder="Comment . . ." pr="14" />
				<Button
					variant="basic"
					color="brand.500"
					p="0"
					position="absolute"
					right="2.5"
					h="auto"
					zIndex="1"
				>
					Post
				</Button>
			</HStack>
			<Comment />
		</Box>
	);
};

export { Post };
