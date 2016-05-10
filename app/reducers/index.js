import { combineReducers } from 'redux';

import clues from '../board/reducers/Clues';
import categories from '../board/reducers/Categories';
import data from './Data';

const rootReducer = combineReducers({
	data,
	categories,
	clues
});

export default rootReducer;
