import { RECEIVE_DATA, REQUEST_DATA } from '../actions/Data';

const initialState = {
	isFetching: false,
	didInvalidate: false,
	lastUpdate: null
};

export default function data(state = initialState, action) {
	switch (action.type) {
		case RECEIVE_DATA:
			return Object.assign({}, state, {isFetching: false, lastUpdate: action.meta.receivedAt});
		case REQUEST_DATA:
			return Object.assign({}, state, {isFetching: true});
		default:
			return state;
	}
}
