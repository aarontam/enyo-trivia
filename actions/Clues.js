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
		dispatch(receiveData({receivedAt: Date.now()}));
		return {
			type: RECEIVE_CLUES,
			// use FSA (Flux Standard Action) definition?
			payload: {
				clues: json
			}
		};
	};
}

export function receiveCluesFoo(json) {
	return {
		type: RECEIVE_CLUES,
		// use FSA (Flux Standard Action) definition?
		payload: {
			clues: json
		},
		meta: {
			receivedAt: Date.now()
		}
	};
}

