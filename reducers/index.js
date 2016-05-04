import { combineReducers } from 'redux'
import { REQUEST_DATA } from '../actions';

import clues from './Clues';
import categories from './Categories';

function data(state = {
	isFetching: false,
	didInvalidate: false
}, action) {
	switch (action.type) {
		case REQUEST_DATA:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			});
		default:
			return state;
	}
}

// TODO: it isn't necessary to use combineReducers right now, as we only have the single reducer,
// but this is more to demonstrate the concept
const rootReducer = combineReducers({
	data,
	categories,
	clues
})

export default rootReducer
