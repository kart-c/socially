import { extendTheme, theme as base, withDefaultColorScheme } from '@chakra-ui/react';

const breakpoints = {
	mySm: '640px',
	myMd: '1000px',
};

export const theme = extendTheme(
	{
		breakpoints,
		colors: {
			brand: {
				light: '#c6e8ff',
				100: '#55b4f4',
				200: '#8ecdf7',
				400: '#1fa5ff',
				500: '#1d9bf0',
			},
			gray: {
				100: '#f7f9f9',
				200: '#0f14191a',
				300: '#536471',
			},
			black: {
				100: '#0f1419',
				200: '#484c4f',
			},
			red: {
				100: '#ffdfed',
				200: '#f91880',
			},
		},
		fonts: {
			body: `Sora, ${base.fonts?.body}`,
		},
		components: {
			Input: {
				variants: {
					outline: {
						field: {
							borderColor: 'brand.100',
							_hover: {
								borderColor: 'brand.400',
							},
							_focus: {
								borderColor: 'brand.500',
							},
						},
					},
				},
			},
			Button: {
				variants: {
					brand: {
						backgroundColor: 'brand.500',
						color: '#fff',
						_hover: {
							backgroundColor: 'brand.400',
							_disabled: {
								backgroundColor: 'brand.400',
							},
						},
						_active: {
							backgroundColor: 'brand.200',
						},
					},
					redIcon: {
						backgroundColor: '#fff',
						color: 'black.200',
						_hover: {
							color: 'red.200',
							backgroundColor: 'red.100',
						},
					},
					brandIcon: {
						backgroundColor: '#fff',
						color: 'black.200',
						_hover: {
							color: 'brand.500',
							backgroundColor: 'brand.light',
						},
					},
					basic: {
						backgroundColor: '#fff',
						color: 'black.200',
						_hover: {
							backgroundColor: '#fff',
						},
						_active: {
							backgroundColor: '#fff',
						},
					},
				},
			},
		},
	},
	withDefaultColorScheme({
		colorScheme: 'brand',
		components: ['Checkbox'],
	})
);
