import { RECEIVE_CATEGORIES, UPDATE_CATEGORY_CLUE, UPDATE_CATEGORY_CLUES } from '../actions/Categories';
import update from 'react-addons-update';

const initialState = [];

export default function categories(state = initialState, action) {
	let newState, categoryId, category;
	switch (action.type) {
        case RECEIVE_CATEGORIES:
            // TODO: this does not account for duplicates
			return [...state, ...action.payload.categories];
		case UPDATE_CATEGORY_CLUE:
			newState = [...state];
			let { clue, data } = action.payload;
			categoryId = clue.category_id;
			category = newState.find(cat => {
				return cat.id === categoryId;
			});
			if (category) {
				let clues = category.clues;
				let clueIndex = clues.findIndex(clueItem => {
					return clueItem.id === clue.id
				});
				let newClue = {
					[clueIndex]: {
						$merge: data
					}
				};
				let newClues = update(category.clues, newClue);
				category.clues = newClues;
			}
			return newState;
        case UPDATE_CATEGORY_CLUES:
			newState = [...state];
			categoryId = action.payload.categoryId;
			category = newState.find(cat => {
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