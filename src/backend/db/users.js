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
		profilePic: '',
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
		profilePic: '',
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
		profilePic: '',
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
		link: '',
		profilePic: '',
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
];
