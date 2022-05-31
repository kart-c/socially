import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
	{
		_id: '5bc70fce-51ee-432e-8906-2794bd07540e',
		firstName: 'John',
		lastName: 'Doe',
		username: 'johndoe',
		password: 'johndoe123',
		bio: 'A novice web developer',
		link: 'https://johndoe.netlify.app/',
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652687739/Socially/Profiles/avataaars_jhvh1w.png',
		following: [
			{
				_id: 'f7b5f617-a4be-41eb-9ce9-e6a59b05b065',
				firstName: 'Gandalf',
				lastName: 'Grey',
				username: 'wizard',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652698930/Socially/Profiles/gandalf.jpg',
			},
		],
		followers: [
			{
				_id: 'e2d77e00-f2b3-4dd3-a38b-b276a45c1f79',
				firstName: 'Smeagol',
				lastName: 'Smeagol',
				username: 'gollum',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652698709/Socially/Profiles/gollum.jpg',
			},
		],
		bookmarks: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: 'bef48613-66a7-4bf3-8733-2d574df0f3f9',
		firstName: 'Kartik',
		lastName: 'Choudhary',
		username: 'kart_c11',
		password: 'KartikC',
		bio: 'A novice web developer',
		link: 'https://github.com/kart-c',
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652698709/Socially/Profiles/kartik.jpg',
		following: [],
		followers: [
			{
				_id: 'bf6d24fe-1dc4-4322-b35f-a5553d7b8d66',
				firstName: 'Bruce',
				lastName: 'Wayne',
				username: 'not_batman',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652699201/Socially/Profiles/Bruce.jpg',
			},
		],
		bookmarks: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: '4f41732c-f426-4156-a2c9-53ee437a70f7',
		firstName: 'Bilbo',
		lastName: 'Baggins',
		username: 'hobbit',
		password: 'shire',
		bio: 'It is no bad thing to celebrate a simple life.',
		link: 'https://github.com/kart-c',
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652698572/Socially/Profiles/bilbo.jpg',
		following: [
			{
				_id: 'f7b5f617-a4be-41eb-9ce9-e6a59b05b065',
				firstName: 'Gandalf',
				lastName: 'Grey',
				username: 'wizard',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652698930/Socially/Profiles/gandalf.jpg',
			},
		],
		followers: [],
		bookmarks: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: 'e2d77e00-f2b3-4dd3-a38b-b276a45c1f79',
		firstName: 'Smeagol',
		lastName: 'Smeogol',
		username: 'gollum',
		password: 'gollum',
		bio: 'My precious',
		link: 'https://github.com/kart-c',
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652698709/Socially/Profiles/gollum.jpg',
		following: [
			{
				_id: '5bc70fce-51ee-432e-8906-2794bd07540e',
				firstName: 'John',
				lastName: 'Doe',
				username: 'johndoe',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652687739/Socially/Profiles/avataaars_jhvh1w.png',
			},
		],
		followers: [],
		bookmarks: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: 'f7b5f617-a4be-41eb-9ce9-e6a59b05b065',
		firstName: 'Gandalf',
		lastName: 'Grey',
		username: 'wizard',
		password: 'gandalfthewhite',
		bio: 'All we have to do is decide what to do with the time that is given to us.',
		link: '',
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652698930/Socially/Profiles/gandalf.jpg',
		createdAt: formatDate(),
		following: [],
		followers: [
			{
				_id: '5bc70fce-51ee-432e-8906-2794bd07540e',
				firstName: 'John',
				lastName: 'Doe',
				username: 'johndoe',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652687739/Socially/Profiles/avataaars_jhvh1w.png',
			},
			{
				_id: '4f41732c-f426-4156-a2c9-53ee437a70f7',
				firstName: 'Bilbo',
				lastName: 'Baggins',
				username: 'hobbit',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652698572/Socially/Profiles/bilbo.jpg',
			},
		],
		bookmarks: [],
		updatedAt: formatDate(),
	},
	{
		_id: '1229c469-14e7-46be-8056-2763994b3e24',
		firstName: 'Anakin',
		lastName: 'Skywalker',
		username: 'vader',
		password: 'darth',
		bio: "If you're not with me, then you're my enemy!",
		link: '',
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652699069/Socially/Profiles/anakin.jpg',
		following: [],
		followers: [],
		bookmarks: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: 'bf6d24fe-1dc4-4322-b35f-a5553d7b8d66',
		firstName: 'Bruce',
		lastName: 'Wayne',
		username: 'not_batman',
		password: 'batman',
		bio: 'I am not Batman!',
		link: '',
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652699201/Socially/Profiles/Bruce.jpg',
		following: [
			{
				_id: 'bef48613-66a7-4bf3-8733-2d574df0f3f9',
				firstName: 'Kartik',
				lastName: 'Choudhary',
				username: 'kart_c11',
				profilePic:
					'https://res.cloudinary.com/obi-wan/image/upload/v1652687739/Socially/Profiles/avataaars_jhvh1w.png',
			},
		],
		followers: [],
		bookmarks: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: '8b049b96-e973-4b15-a671-1bbecdc8556e',
		firstName: 'Obiwan',
		lastName: 'Kenobi',
		username: 'ben',
		password: 'obiwan',
		bio: 'There is no such thing as luck',
		link: '',
		profilePic:
			'https://res.cloudinary.com/obi-wan/image/upload/v1652699372/Socially/Profiles/kenobi.png',
		following: [],
		followers: [],
		bookmarks: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
];
