import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/index';
import Categories from '../components/Categories';
import Clues from '../components/Clues';

class App extends Component {

	componentDidMount() {
		const { actions } = this.props;
		actions.randomClue();
		actions.randomCategories();
	}

	render() {
		const { clues, categories } = this.props;
		// TODO: not sure if there is a more idiomatic way of doing this, but if not, we should
		// consider adding support for conditionally rendering components

		return (
			<div>
				{categories && <Categories categories={categories} />}
				{clues && <Clues clues={clues} />}
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
	console.log("MAPPING STATE TO PROPS", state);
	return {
		clues: state.clues,
		categories: state.categories
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actionCreators, dispatch),
		dispatch: dispatch //TODO only really need this to satisfy propTypes
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
