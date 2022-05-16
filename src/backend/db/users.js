import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
	{
		_id: uuid(),
		firstName: 'Adarsh',
		lastName: 'Balika',
		username: 'adarshbalika',
		password: 'adarshBalika123',
		bio: 'A novice web developer',
		link: 'https://adarshbalika.netlify.app/',
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652687739/Socially/Profiles/avataaars_jhvh1w.png',
		bookmarks: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: 'Kartik',
		lastName: 'Choudhary',
		username: 'kart_c11',
		password: 'KartikC',
		bio: 'A novice web developer',
		link: 'https://github.com/kart-c',
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652687739/Socially/Profiles/avataaars_jhvh1w.png',
		bookmarks: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: 'Bilbo',
		lastName: 'Baggins',
		username: 'hobbit',
		password: 'shire',
		bio: 'It is no bad thing to celebrate a simple life.',
		link: 'https://github.com/kart-c',
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652698572/Socially/Profiles/bilbo.jpg',
		bookmarks: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: 'Smeagol',
		lastName: 'Smeogol',
		username: 'gollum',
		password: 'gollum',
		bio: 'My precious',
		link: 'https://github.com/kart-c',
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652698709/Socially/Profiles/gollum.jpg',
		bookmarks: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: 'Gandalf',
		lastName: 'Grey',
		username: 'wizard',
		password: 'gandalfthewhite',
		bio: 'All we have to do is decide what to do with the time that is given to us.',
		link: 'https://res.cloudinary.com/obi-wan/image/upload/v1652698930/Socially/Profiles/gandalf.jpg',
		profilePic: '',
		createdAt: formatDate(),
		bookmarks: [],
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: 'Anakin',
		lastName: 'Skywalker',
		username: 'vader',
		password: 'darth',
		bio: "If you're not with me, then you're my enemy!",
		link: '',
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652699069/Socially/Profiles/anakin.jpg',
		bookmarks: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: 'Bruce',
		lastName: 'Wayne',
		username: 'not_batman',
		password: 'batman',
		bio: 'I am not Batman!',
		link: '',
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652699201/Socially/Profiles/Bruce.jpg',
		bookmarks: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: 'Obiwan',
		lastName: 'Kenobi',
		username: 'ben',
		password: 'obiwan',
		bio: 'There is no such thing as luck',
		link: '',
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652699372/Socially/Profiles/kenobi.png',
		bookmarks: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
];
