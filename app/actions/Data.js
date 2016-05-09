export const apiBaseUrl = 'http://jservice.io/api';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export function requestData() {
	return {
		type: REQUEST_DATA
	};
}

export function receiveData(receivedAt) {
	return {
		type: RECEIVE_DATA,
		// use FSA (Flux Standard Action) definition?
		meta: {
			receivedAt: receivedAt || Date.now()
		}
	};
}