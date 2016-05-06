import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
import initialState from './initialState'; // saw a recommendation to use a function return (to "protect" initialState from changing?)

const store = configureStore(initialState());

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
