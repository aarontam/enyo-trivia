import { RECEIVE_CATEGORIES, UPDATE_CATEGORY } from '../actions/Categories';

const initialState = [];

export default function categories(state = initialState, action) {
	switch (action.type) {
		case RECEIVE_CATEGORIES:
			return action.payload.categories;
		case UPDATE_CATEGORY:
			console.log("UPDATE_CATEGORY REDUCER", action);
			let newState = [...state];
			let categoryId = action.payload.categoryId;
			let category = newState.find((cat) => {
				return cat.categoryId === categoryId;
			});

			if (category) {
				console.log("CATEGORY MATCH!");
			} else {
				console.log("CATEGORY NO MATCH D:");
			}
			return state;
		default:
			return state || [];
	}
};