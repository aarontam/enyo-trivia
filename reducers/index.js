import { combineReducers } from 'redux';

import clues from './Clues';
import categories from './Categories';
import data from './Data';

const rootReducer = combineReducers({
	data,
	categories,
	clues
});

export default rootReducer;
