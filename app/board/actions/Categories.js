import fetch from 'isomorphic-fetch';

import { apiBaseUrl } from './../../actions/Data';
import { requestData, receiveData } from './../../actions/index';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const UPDATE_CATEGORY_CLUE = 'UPDATE_CATEGORY_CLUE';
export const UPDATE_CATEGORY_CLUES = 'UPDATE_CATEGORY_CLUES';

export function randomCategories(count = 6) {
	const offset = Math.random()*1000;
	return dispatch => {
		dispatch(requestData());
		return fetch(`${apiBaseUrl}/categories?count=${count}&offset=${offset}`)
			.then(response => response.json())
			.then(json => dispatch(receiveCategories(json)));
	};
}

export function categoryClues(categoryId) {
	return dispatch => {
		dispatch(requestData());
		return fetch(`${apiBaseUrl}/category?id=${categoryId}`)
			.then(response => response.json())
			.then(json => dispatch({type: UPDATE_CATEGORY_CLUES, payload: {categoryId: categoryId, clues: json.clues}}));
	};
}

function receiveCategories(json) {
    return dispatch => {
        dispatch({type: RECEIVE_CATEGORIES, payload: {categories: json}});
        json.map((category) => {
            console.log("REQUEST CATEGORY'S CLUES");
            dispatch(categoryClues(category.id));
        });
        dispatch(receiveData({receivedAt: Date.now()}));
    };
}

export function updateCategoryClue(clue, data) {
	return {
		type: UPDATE_CATEGORY_CLUE,
		payload: {
			clue,
			data
		},
		receivedAt: Date.now()
	}
}

export function updateCategoryClues(clues, categoryId) {
	return {
		type: UPDATE_CATEGORY_CLUES,
		payload: {
			clues: clues,
			categoryId: categoryId
		},
		receivedAt: Date.now()
	}
}