import fetch from 'isomorphic-fetch';

import { apiBaseUrl } from './Data';
import { requestData } from './index';

export const RECEIVE_CLUE = 'RECEIVE_CLUE';

export function randomClue() {
	return dispatch => {
		dispatch(requestData());
		return fetch(`${apiBaseUrl}/random`)
			.then(response => response.json())
			.then(json => dispatch(receiveClue(json)));
	};
}

function receiveClue(json) {
	return {
		type: RECEIVE_CLUE,
		// use FSA (Flux Standard Action) definition?
		payload: {
			clues: json
		},
		receivedAt: Date.now()
	};
}

