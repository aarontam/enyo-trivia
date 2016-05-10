export {categoryClues, randomCategories, updateCategoryClue, updateCategoryClues } from '../board/actions/Categories';
export {randomClue, updateClues} from '../board/actions/Clues';
export {requestData, receiveData} from './Data';

export const REVEAL_CLUE = "REVEAL_CLUE";

export function revealClue(clue) {
	return {
		type: REVEAL_CLUE,
		payload: clue
	};
}
