import { RECEIVE_CLUES, UPDATE_CLUES } from '../actions/Clues';

const initialState = [];

export default function clues(state = initialState, action) {
	switch (action.type) {
		case RECEIVE_CLUES:
		case UPDATE_CLUES:
			return [...action.payload.clues, ...state];
		default:
			return state || [];
	}
}
