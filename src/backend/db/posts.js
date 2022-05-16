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
			likedBy: [],
			dislikedBy: [],
		},
		firstName: 'Bilbo',
		lastName: 'Baggins',
		username: 'hobbit',
		createdAt: formatDate(),
		updatedAt: formatDate(),
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652687739/Socially/Profiles/avataaars_jhvh1w.png',
		comments: [
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
			{
				_id: uuid(),
				firstName: 'Smeagol',
				lastName: 'Smeagol',
				username: 'gollum',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652687739/Socially/Profiles/avataaars_jhvh1w.png',
				text: "That's no fair, that's no fair, that's against the rules.",
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
					'https://res.cloudinary.com/obi-wan/image/upload/v1652687739/Socially/Profiles/avataaars_jhvh1w.png',
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
					'https://res.cloudinary.com/obi-wan/image/upload/v1652687739/Socially/Profiles/avataaars_jhvh1w.png',
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
];
