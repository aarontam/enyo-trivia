
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from './actions';

import BoardContainer from './board/BoardContainer';
import ClueDisplayContainer from './clueDisplay/ClueDisplayContainer';



class App extends Component {

	componentDidMount() {
		const { actions } = this.props;
		actions.randomCategories(6);
	}

	render() {
		const { game } = this.props;
		console.log("RENDER APP", this);
		return (
			<div className="app">
				<BoardContainer />
				<ClueDisplayContainer clue={game.currentClue} />
			</div>
		)
	}
}

App.propTypes = {
	dispatch: PropTypes.func.isRequired,
	game: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		game: state.game
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actionCreators, dispatch),
		dispatch: dispatch //TODO only really need this to satisfy propTypes
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
