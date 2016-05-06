import fetch from 'isomorphic-fetch';

import { apiBaseUrl } from './Data';
import { requestData, receiveData } from './index';

export const RECEIVE_CLUES = 'RECEIVE_CLUES';

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
