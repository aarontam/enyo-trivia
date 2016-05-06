import fetch from 'isomorphic-fetch';

import { apiBaseUrl } from './Data';
import { requestData, receiveData } from './index';

export const RECEIVE_CLUES = 'RECEIVE_CLUES';
export const UPDATE_CLUES = 'UPDATE_CLUES';

export function randomClue() {
	return dispatch => {
		dispatch(requestData());
		return fetch(`${apiBaseUrl}/random`)
			.then(response => response.json())
			.then(json => dispatch(receiveClues(json)));
	};
}

export function receiveClues(json) {
	return dispatch => {
		dispatch({type: RECEIVE_CLUES, payload: {clues: json}});
		dispatch(receiveData({receivedAt: Date.now()}));
	};
}

export function updateClues(clues) {
	return {
		type: UPDATE_CLUES,
		payload: {
			clues: clues
		},
		receivedAt: Date.now()
	};
}
