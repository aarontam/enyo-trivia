import fetch from 'isomorphic-fetch'

export const REQUEST_CLUE = 'REQUEST_CLUE'
export const RECEIVE_CLUE = 'RECEIVE_CLUE'

export function randomClue() {
	return dispatch => {
		dispatch(requestClue());
		return fetch ('http://jservice.io/api/random')
			.then(response => response.json())
			.then(json => dispatch(receiveClue(json)))
	}
}

function requestClue() {
	return {
		type: REQUEST_CLUE
	}
}

function receiveClue(json) {
	console.log(json[0]);
	return {
		type: RECEIVE_CLUE,
		clue: json[0],
		receivedAt: Date.now()
	}
}
