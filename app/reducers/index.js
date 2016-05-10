import { combineReducers } from 'redux';
import { REVEAL_CLUE } from '../actions';

import clues from '../board/reducers/Clues';
import categories from '../board/reducers/Categories';
import data from './Data';

let initialState = {};

const game = function(state = initialState, action) {
	switch (action.type) {
		case REVEAL_CLUE:
			return Object.assign({}, state, {currentClue: action.payload});
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	data,
	categories,
	clues,
	game
});

export default rootReducer;
