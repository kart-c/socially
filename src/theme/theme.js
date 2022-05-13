import { extendTheme, theme as base, withDefaultColorScheme } from '@chakra-ui/react';

export const theme = extendTheme(
	{
		colors: {
			brand: {
				100: '#55b4f4',
				200: '#8ecdf7',
				400: '#1fa5ff',
				500: '#1d9bf0',
			},
			bg: {
				100: '#f7f9f9',
			},
			black: '#0f1419',
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
						_hover: {
							backgroundColor: 'brand.400',
						},
						_active: {
							backgroundColor: 'brand.200',
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
