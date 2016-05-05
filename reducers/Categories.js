import { RECEIVE_CATEGORIES } from '../actions/Categories';

const initialState = [];

export default function categories(state = initialState, action) {
	switch (action.type) {
		case RECEIVE_CATEGORIES:
			return action.payload.categories;
		default:
			return state || [];
	}
};