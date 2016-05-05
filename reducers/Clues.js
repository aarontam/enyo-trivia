import { RECEIVE_CLUES } from '../actions/Clues';

const initialState = [];

export default function clues(state = initialState, action) {
	switch (action.type) {
		case RECEIVE_CLUES:
			// return Object.assign({}, state, {
			// 	isFetching: false,
			// 	didInvalidate: false,
			// 	clues: action.clues,
			// 	lastUpdated: action.receivedAt
			// });
			return action.payload.clues; //TODO should move other state pieces (lastUpdated, isFetching, etc.) to other actions/state branches?
		default:
			return state || [];
	}
}
