import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'theme/theme';

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>
);
