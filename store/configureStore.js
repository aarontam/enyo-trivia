import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../app/reducers';

export default function configureStore(initialState) {
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(thunkMiddleware, createLogger())
	);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../app/reducers', () => {
			const nextRootReducer = require('../app/reducers').default
			store.replaceReducer(nextRootReducer)
		});
	}

	return store;
}
