import React from 'react';
import {
	Avatar,
	Box,
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

const Post = ({ content, likes, username, img, firstName, lastName, profilePic, comments }) => {
	return (
		<Box as="article" p="4" borderBottom="1px solid" borderColor="gray.200" position="relative">
			<Flex gap="3">
				<Avatar name={`${firstName} ${lastName}`} src={profilePic}></Avatar>
				<Flex mt="2" gap="3" flexDir="column">
					<Flex w="100%" justify="space-between">
						<Heading as="h3" fontWeight="700" fontSize="16">
							{`${firstName}  ${lastName}`}{' '}
							<Text as="span" fontWeight="400" fontSize="14" color="gray.300">
								@{username}
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
					<Text>{content}</Text>
					{img ? (
						<Box w="full" h="300">
							<Image src={img} alt="placeholder" w="full" h="full" objectFit="cover" />
						</Box>
					) : null}
				</Flex>
			</Flex>
			<Flex ml="60px" mt="4" w="calc(100% - 60px)">
				<Tooltip label="Like">
					<Box display="flex" alignItems="center">
						<IconButton
							aria-label="Like"
							icon={<AiOutlineHeart fontSize="20px" />}
							borderRadius="full"
							variant="redIcon"
						/>
						{likes.likedBy.length ? likes.likedBy.length : null}
					</Box>
				</Tooltip>
				{/* <Tooltip label="Like">
					<IconButton
						aria-label="Like"
						color="red.200"
						icon={<AiFillHeart fontSize="20px" />}
						borderRadius="full"
						variant="redIcon"
					/>
				</Tooltip> */}
				{/* <Tooltip label="Bookmark">
					<IconButton
						aria-label="Bookmark"
						color="brand.500"
						icon={<MdOutlineBookmark fontSize="20px" />}
						borderRadius="full"
						variant="brandIcon"
					/>
				</Tooltip> */}
				<Tooltip label="Bookmark">
					<IconButton
						display="flex"
						ml="auto"
						aria-label="Bookmark"
						icon={<MdOutlineBookmarkBorder fontSize="20px" />}
						borderRadius="full"
						variant="brandIcon"
					/>
				</Tooltip>
			</Flex>
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
			{comments?.length > 0
				? comments.map((comment) => <Comment key={comment._id} {...comment} />)
				: null}
		</Box>
	);
};

export { Post };
