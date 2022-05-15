import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'theme/theme';
import { store } from 'Redux/app/store';

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ChakraProvider theme={theme}>
					<App />
				</ChakraProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
