import { RECEIVE_CATEGORIES, RECEIVE_CLUES } from '../actions/Categories';

const initialState = [];

export default function categories(state = initialState, action) {
	switch (action.type) {
		case RECEIVE_CATEGORIES:
			return action.payload.categories;
		case RECEIVE_CLUES:
			return action.payload.clues;
		default:
			return state || [];
	}
};