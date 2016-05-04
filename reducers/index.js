import { combineReducers } from 'redux'
import {
	REQUEST_DATA, RECEIVE_CLUE, RECEIVE_CLUES, RECEIVE_CATEGORIES
} from '../actions'

function data(state = {
	isFetching: false,
	didInvalidate: false
}, action) {
	switch (action.type) {
		case REQUEST_DATA:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})
		case RECEIVE_CLUE:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				clues: action.clues,
				lastUpdated: action.receivedAt
			})
		case RECEIVE_CLUES:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				clues: action.clues,
				lastUpdated: action.receivedAt
			})
		case RECEIVE_CATEGORIES:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				categories: action.categories,
				lastUpdated: action.receivedAt
			})
		default:
			return state
	}
}

// TODO: it isn't necessary to use combineReducers right now, as we only have the single reducer,
// but this is more to demonstrate the concept
const rootReducer = combineReducers({
	data
})

export default rootReducer
