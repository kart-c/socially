import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';
import RL from 'Assets/rl.jpg';

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
	{
		_id: uuid(),
		content: 'What have I got in my pocket?',
		likes: {
			likeCount: 2,
			likedBy: [],
			dislikedBy: [],
		},
		firstName: 'Bilbo',
		lastName: 'Baggins',
		username: 'hobbit',
		createdAt: new Date('01/19/2015'),
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
				firstName: 'John',
				lastName: 'Doe',
				username: 'johndoe',
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
			likeCount: 2,
			likedBy: [],
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
		createdAt: new Date('04/22/2021'),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "It's over, Anakin! I have the high ground.",
		likes: {
			likeCount: 1,
			likedBy: [],
			dislikedBy: [],
		},
		firstName: 'Obiwan',
		lastName: 'Kenobi',
		username: 'ben',
		createdAt: new Date('11/24/2021'),
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
			likeCount: 4,
			likedBy: [],
			dislikedBy: [],
		},
		firstName: 'Gandalf',
		lastName: 'Grey',
		username: 'wizard',
		createdAt: new Date('03/15/2002'),
		updatedAt: formatDate(),
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652698930/Socially/Profiles/gandalf.jpg',
		comments: [],
	},
	{
		_id: uuid(),
		content: 'Good Morning everyone. Have a nice day',
		likes: {
			likeCount: 3,
			likedBy: [],
			dislikedBy: [],
		},
		firstName: 'John',
		lastName: 'Doe',
		username: 'johndoe',
		createdAt: new Date('04/03/2022'),
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
			likeCount: 3,
			likedBy: [],
			dislikedBy: [],
		},
		firstName: 'Gandalf',
		lastName: 'Grey',
		username: 'wizard',
		createdAt: new Date('06/12/2004'),
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
			likeCount: 2,
			likedBy: [],
			dislikedBy: [],
		},
		firstName: 'Smeagol',
		lastName: 'Smeogol',
		username: 'gollum',
		createdAt: new Date('10/20/2007'),
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
	{
		_id: uuid(),
		content: "Who's up for some RL this weekend?",
		likes: {
			likeCount: 2,
			likedBy: [],
			dislikedBy: [],
		},
		firstName: 'John',
		lastName: 'Doe',
		username: 'johndoe',
		media: RL,
		createdAt: new Date('01/19/2022'),
		updatedAt: formatDate(),
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652687739/Socially/Profiles/avataaars_jhvh1w.png',
		comments: [
			{
				_id: uuid(),
				firstName: 'Bruce',
				lastName: 'Wayne',
				username: 'not_batman',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652699201/Socially/Profiles/Bruce.jpg',
				text: 'Count me in!!',
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				firstName: 'Anakin',
				lastName: 'Skywalker',
				username: 'vader',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652699069/Socially/Profiles/anakin.jpg',
				text: 'I will make the popcorn!',
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},
	{
		_id: uuid(),
		content: 'You Either Die A Hero Or You Live Long Enough To See Yourself Become The Villain.',
		likes: {
			likeCount: 4,
			likedBy: [],
			dislikedBy: [],
		},
		firstName: 'Bruce',
		lastName: 'Wayne',
		username: 'not_batman',
		createdAt: new Date('03/24/2010'),
		updatedAt: formatDate(),
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652699201/Socially/Profiles/Bruce.jpg',
		comments: [
			{
				_id: uuid(),
				firstName: 'Anakin',
				lastName: 'Skywalker',
				username: 'vader',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652699069/Socially/Profiles/anakin.jpg',
				text: 'You are not wrong about that!',
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
			'I see through the lies of the Jedi. I do not fear the dark side as you do. I have brought peace, freedom, justice, and security to my new empire.',
		likes: {
			likeCount: 1,
			likedBy: [],
			dislikedBy: [],
		},
		firstName: 'Anakin',
		lastName: 'Skywalker',
		username: 'vader',
		createdAt: new Date('04/22/2017'),
		updatedAt: formatDate(),
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652699201/Socially/Profiles/anakin.jpg',
		comments: [
			{
				_id: uuid(),
				firstName: 'Obiwan',
				lastName: 'Kenobi',
				username: 'ben',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652699372/Socially/Profiles/kenobi.png',
				text: 'Only a sith deals in absolutes!',
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},
	{
		_id: uuid(),
		content: "I'm Going On An Adventure!",
		likes: {
			likeCount: 4,
			likedBy: [],
			dislikedBy: [],
		},
		firstName: 'Bilbo',
		lastName: 'Baggins',
		username: 'hobbit',
		createdAt: new Date('04/10/2014'),
		updatedAt: formatDate(),
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652698572/Socially/Profiles/bilbo.jpg',
		comments: [
			{
				_id: uuid(),
				firstName: 'Kartik',
				lastName: 'Choudhary',
				username: 'kart_c11',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652687739/Socially/Profiles/avataaars_jhvh1w.png',
				text: 'Good luck!',
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},
	{
		_id: uuid(),
		content: "I'm Going On An Adventure!",
		likes: {
			likeCount: 4,
			likedBy: [],
			dislikedBy: [],
		},
		firstName: 'Bilbo',
		lastName: 'Baggins',
		username: 'hobbit',
		createdAt: new Date('04/10/2014'),
		updatedAt: formatDate(),
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652698572/Socially/Profiles/bilbo.jpg',
		comments: [
			{
				_id: uuid(),
				firstName: 'Kartik',
				lastName: 'Choudhary',
				username: 'kart_c11',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652687739/Socially/Profiles/avataaars_jhvh1w.png',
				text: 'Good luck!',
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
			'All Men Have Limits. They Learn What They Are And Learn Not To Exceed Them. I Ignore Mine.',
		likes: {
			likeCount: 4,
			likedBy: [],
			dislikedBy: [],
		},
		firstName: 'Bruce',
		lastName: 'Wayne',
		username: 'not_batman',
		createdAt: new Date('05/12/2018'),
		updatedAt: formatDate(),
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652699201/Socially/Profiles/Bruce.jpg',
		comments: [],
	},
	{
		_id: uuid(),
		content:
			'Do you believe that many of the truths we cling to depend greatly on our own point of view?',
		likes: {
			likeCount: 2,
			likedBy: [],
			dislikedBy: [],
		},
		firstName: 'Obiwan',
		lastName: 'Kenobi',
		username: 'ben',
		createdAt: new Date('04/10/2017'),
		updatedAt: formatDate(),
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652699372/Socially/Profiles/kenobi.png',
		comments: [],
	},
	{
		_id: uuid(),
		content: 'It is a comfort not to be mistaken at all points. Do I not know it only too well!',
		likes: {
			likeCount: 1,
			likedBy: [],
			dislikedBy: [],
		},
		firstName: 'Gandalf',
		lastName: 'Grey',
		username: 'wizard',
		createdAt: new Date('04/10/2014'),
		updatedAt: formatDate(),
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652698930/Socially/Profiles/gandalf.jpg',
		comments: [],
	},
];
