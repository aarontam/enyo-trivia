import fetch from 'isomorphic-fetch'

const apiBaseUrl = 'http://jservice.io/api'

export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_CLUE = 'RECEIVE_CLUE'
export const RECEIVE_CLUES = 'RECEIVE_CLUES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export function randomClue() {
	return dispatch => {
		dispatch(requestData())
		return fetch(`${apiBaseUrl}/random`)
			.then(response => response.json())
			.then(json => dispatch(receiveClue(json)))
	}
}

export function randomCategories(count = 5) {
	const offset = Math.random()*1000
	return dispatch => {
		dispatch(requestData())
		return fetch(`${apiBaseUrl}/categories?count=${count}&offset=${offset}`)
			.then(response => response.json())
			.then(json => dispatch(receiveCategories(json)))
	}
}

export function categoryClues(categoryId) {
	return dispatch => {
		dispatch(requestData())
		return fetch(`${apiBaseUrl}/clues/?category=${categoryId}`)
			.then(response => response.json())
			.then(json => dispatch(receiveCategoryClues(json)))
	}
}

function requestData() {
	return {
		type: REQUEST_DATA
	}
}

function receiveClue(json) {
	return {
		type: RECEIVE_CLUE,
		clues: json,
		receivedAt: Date.now()
	}
}

function receiveCategories(json) {
	return {
		type: RECEIVE_CATEGORIES,
		categories: json,
		receivedAt: Date.now()
	}
}

function receiveCategoryClues(json) {
	return {
		type: RECEIVE_CLUES,
		clues: json,
		receivedAt: Date.now()
	}
}
