function initialState() {
	let state = {
		data: {
			isFetching: false,
			didInvalidate: false,
			lastUpdate: null
		},
		categories: [],
		clues: [],
		game: {
			round: 0,
			currentClue: {}
		}
	};
	return state;
}

export default initialState;