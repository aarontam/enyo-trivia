import { combineReducers } from 'redux'
import {
  REQUEST_CLUE, RECEIVE_CLUE
} from '../actions'

function data(state = {
	isFetching: false,
	didInvalidate: false,
	clue: null
}, action) {
	switch (action.type) {
		case REQUEST_CLUE:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})
		case RECEIVE_CLUE:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				clue: action.clue,
				lastUpdated: action.receivedAt
			})
		default:
			return state
	}
}

const rootReducer = combineReducers({
	data
})

export default rootReducer
