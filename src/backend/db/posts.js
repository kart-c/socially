import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
	{
		_id: uuid(),
		content: 'What have I got in my pocket?',
		likes: {
			likeCount: 0,
			likedBy: [
				{
					firstName: 'Bilbo',
					lastName: 'Baggins',
					username: 'hobbit',
					profilePic:
						'https://res.cloudinary.com/obi-wan/image/upload/v1652698572/Socially/Profiles/bilbo.jpg',
				},
				{
					firstName: 'Bruce',
					lastName: 'Wayne',
					username: 'not_batman',
					profilePic:
						'https://res.cloudinary.com/obi-wan/image/upload/v1652699201/Socially/Profiles/Bruce.jpg',
				},
			],
			dislikedBy: [],
		},
		firstName: 'Bilbo',
		lastName: 'Baggins',
		username: 'hobbit',
		createdAt: formatDate(),
		updatedAt: formatDate(),
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652698572/Socially/Profiles/bilbo.jpg',
		comments: [
			{
				_id: uuid(),
				firstName: 'Smeagol',
				lastName: 'Smeagol',
				username: 'gollum',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652698709/Socially/Profiles/gollum.jpg',
				text: "That's no fair, that's no fair, that's against the rules.",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				firstName: 'Adarsh',
				lastName: 'Balika',
				username: 'adarshbalika',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652687739/Socially/Profiles/avataaars_jhvh1w.png',
				text: 'Interesting',
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},
	{
		_id: uuid(),
		content:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.',
		likes: {
			likeCount: 0,
			likedBy: [
				{
					firstName: 'Bilbo',
					lastName: 'Baggins',
					username: 'hobbit',
					profilePic:
						'https://res.cloudinary.com/obi-wan/image/upload/v1652698572/Socially/Profiles/bilbo.jpg',
				},
				{
					firstName: 'Gandalf',
					lastName: 'Grey',
					username: 'wizard',
					profilePic:
						'https://res.cloudinary.com/obi-wan/image/upload/v1652698930/Socially/Profiles/gandalf.jpg',
				},
			],
			dislikedBy: [],
		},
		firstName: 'Kartik',
		lastName: 'Choudhary',
		username: 'kart_c11',
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652687739/Socially/Profiles/avataaars_jhvh1w.png',
		comments: [
			{
				_id: uuid(),
				firstName: 'Bilbo',
				lastName: 'Baggins',
				username: 'hobbit',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652698572/Socially/Profiles/bilbo.jpg',
				text: 'Interesting',
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				firstName: 'Gandalf',
				lastName: 'Grey',
				username: 'wizard',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652698930/Socially/Profiles/gandalf.jpg',
				text: 'Wow!',
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "It's over, Anakin! I have the high ground.",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [
				{
					firstName: 'Anakin',
					lastName: 'Skywalker',
					username: 'vader',
					profilePic:
						'https://res.cloudinary.com/obi-wan/image/upload/v1652699069/Socially/Profiles/anakin.jpg',
				},
			],
		},
		firstName: 'Obiwan',
		lastName: 'Kenobi',
		username: 'ben',
		createdAt: formatDate(),
		updatedAt: formatDate(),
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652699372/Socially/Profiles/kenobi.png',
		comments: [
			{
				_id: uuid(),
				firstName: 'Anakin',
				lastName: 'Skywalker',
				username: 'vader',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652699069/Socially/Profiles/anakin.jpg',
				text: 'You underestimate my power.',
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				firstName: 'Bruce',
				lastName: 'Wayne',
				username: 'not_batman',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652699201/Socially/Profiles/Bruce.jpg',
				text: 'This is an interesting turn of events.',
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},
	{
		_id: uuid(),
		content: 'You shall not pass',
		likes: {
			likeCount: 0,
			likedBy: [
				{
					firstName: 'Kartik',
					lastName: 'Choudhary',
					username: 'kart_c11',
					profilePic:
						'https://res.cloudinary.com/obi-wan/image/upload/v1652687739/Socially/Profiles/avataaars_jhvh1w.png',
				},
				{
					firstName: 'Bilbo',
					lastName: 'Baggins',
					username: 'hobbit',
					profilePic:
						'https://res.cloudinary.com/obi-wan/image/upload/v1652698572/Socially/Profiles/bilbo.jpg',
				},
				{
					firstName: 'Bruce',
					lastName: 'Wayne',
					username: 'not_batman',
					profilePic:
						'https://res.cloudinary.com/obi-wan/image/upload/v1652699201/Socially/Profiles/Bruce.jpg',
				},
				{
					firstName: 'Obiwan',
					lastName: 'Kenobi',
					username: 'ben',
					profilePic:
						'https://res.cloudinary.com/obi-wan/image/upload/v1652699372/Socially/Profiles/kenobi.png',
				},
			],
			dislikedBy: [],
		},
		firstName: 'Gandalf',
		lastName: 'Grey',
		username: 'wizard',
		createdAt: formatDate(),
		updatedAt: formatDate(),
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652698930/Socially/Profiles/gandalf.jpg',
		comments: [],
	},
	{
		_id: uuid(),
		content: 'Good Morning everyone. Have a nice day',
		likes: {
			likeCount: 0,
			likedBy: [
				{
					firstName: 'Kartik',
					lastName: 'Choudhary',
					username: 'kart_c11',
					profilePic:
						'https://res.cloudinary.com/obi-wan/image/upload/v1652687739/Socially/Profiles/avataaars_jhvh1w.png',
				},
				{
					firstName: 'Bilbo',
					lastName: 'Baggins',
					username: 'hobbit',
					profilePic:
						'https://res.cloudinary.com/obi-wan/image/upload/v1652698572/Socially/Profiles/bilbo.jpg',
				},
			],
			dislikedBy: [],
		},
		firstName: 'Adarsh',
		lastName: 'Balika',
		username: 'adarshbalika',
		createdAt: formatDate(),
		updatedAt: formatDate(),
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652687739/Socially/Profiles/avataaars_jhvh1w.png',
		comments: [
			{
				_id: uuid(),
				firstName: 'Anakin',
				lastName: 'Skywalker',
				username: 'vader',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652699069/Socially/Profiles/anakin.jpg',
				text: 'You too.',
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},
	{
		_id: uuid(),
		content: 'Only a small part is played in great deeds by any hero.',
		likes: {
			likeCount: 0,
			likedBy: [
				{
					firstName: 'Kartik',
					lastName: 'Choudhary',
					username: 'kart_c11',
					profilePic:
						'https://res.cloudinary.com/obi-wan/image/upload/v1652687739/Socially/Profiles/avataaars_jhvh1w.png',
				},
				{
					firstName: 'Bilbo',
					lastName: 'Baggins',
					username: 'hobbit',
					profilePic:
						'https://res.cloudinary.com/obi-wan/image/upload/v1652698572/Socially/Profiles/bilbo.jpg',
				},
			],
			dislikedBy: [],
		},
		firstName: 'Gandalf',
		lastName: 'Grey',
		username: 'wizard',
		createdAt: formatDate(),
		updatedAt: formatDate(),
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652698930/Socially/Profiles/gandalf.jpg',
		comments: [
			{
				_id: uuid(),
				firstName: 'Bruce',
				lastName: 'Wayne',
				username: 'not_batman',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652699201/Socially/Profiles/Bruce.jpg',
				text: 'You sure about that?',
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},
	{
		_id: uuid(),
		content:
			'We wants it. We needs it. Must have the precious. They stole it from us. Sneaky little Hobbitses. Wicked. Tricksy. False.',
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		firstName: 'Smeagol',
		lastName: 'Smeogol',
		username: 'gollum',
		createdAt: formatDate(),
		updatedAt: formatDate(),
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652698709/Socially/Profiles/gollum.jpg',
		comments: [
			{
				_id: uuid(),
				firstName: 'Bilbo',
				lastName: 'Baggins',
				username: 'hobbit',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652698572/Socially/Profiles/bilbo.jpg',
				text: 'Hahaha',
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},
];
