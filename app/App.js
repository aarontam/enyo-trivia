
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from './../actions/index';

import BoardContainer from './board/BoardContainer';



class App extends Component {

	componentDidMount() {
		const { actions } = this.props;
		actions.randomCategories(6);
	}

	render() {
		const { actions, clues, categories } = this.props;
		// TODO: not sure if there is a more idiomatic way of doing this, but if not, we should
		// consider adding support for conditionally rendering components
		console.log("RENDER APP", this);
		return (
			<div className="app">
				<BoardContainer />
			</div>
		)
	}
}

App.propTypes = {
	clues: PropTypes.array,
	categories: PropTypes.array,
	dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	return {
		clues: state.clues,
		categories: state.categories,
		data: state.data
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actionCreators, dispatch),
		dispatch: dispatch //TODO only really need this to satisfy propTypes
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
