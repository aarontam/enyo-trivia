//TODO there has to be a better way to import/export this stuff

import { categoryClues as catClue, randomCategories as catRand } from './Categories';
import { randomClue as clueRand } from './Clues';
import { requestData as request, receiveData as receive } from './Data';

export const categoryClues = catClue;
export const randomCategories = catRand;
export const randomClue = clueRand;
export const requestData = request;
export const receiveData = receive;
