import fetch from 'isomorphic-fetch';

import { apiBaseUrl } from './Data';
import { requestData, receiveData } from './index';
import { RECEIVE_CLUES } from './Clues';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export function randomCategories(count = 5) {
	const offset = Math.random()*1000;
	return dispatch => {
		dispatch(requestData());
		return fetch(`${apiBaseUrl}/categories?count=${count}&offset=${offset}`)
			.then(response => response.json())
			.then(json => dispatch(receiveCategories(json)))
			.then(dispatch(receiveData({receivedAt: Date.now()})));
	};
}

export function categoryClues(categoryId) {
	return dispatch => {
		dispatch(requestData());
		return fetch(`${apiBaseUrl}/clues/?category=${categoryId}`)
			.then(response => response.json())
			.then(json => dispatch({type: RECEIVE_CLUES, payload: {clues: json}}))
			.then(dispatch(receiveData({receivedAt: Date.now()})));
	};
}

function receiveCategories(json) {
	return {
		type: RECEIVE_CATEGORIES,
		// use FSA (Flux Standard Action) definition?
		payload: {
			categories: json
		},
		meta: {
			receivedAt: Date.now()
		}
	};
}