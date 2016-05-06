import { RECEIVE_CATEGORIES, UPDATE_CATEGORY_CLUES } from '../actions/Categories';

const initialState = [];

export default function categories(state = initialState, action) {
	switch (action.type) {
        case RECEIVE_CATEGORIES:
            // TODO: this does not account for duplicates
			return [...state, ...action.payload.categories];
        case UPDATE_CATEGORY_CLUES:
			let newState = [...state];
			let categoryId = action.payload.categoryId;
			let category = newState.find(cat => {
				return cat.id === categoryId;
			});

			if (category) {
                // TODO: this just replaces all the category's clues instead of adding them
                category.clues = action.payload.clues;
                category.clues_count = category.clues.length;
			}
			return newState;
		default:
			return state || [];
	}
};