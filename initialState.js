function initialState() {
	let state = {
		data: {
			isFetching: false,
			didInvalidate: false,
			lastUpdate: null
		},
		categories: [],
		clues: []
	};
	return state;
}

export default initialState;