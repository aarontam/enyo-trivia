import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/index';
import Board from '../components/Board';

class App extends Component {

	componentDidMount() {
		const { actions } = this.props;
		actions.randomCategories(6);
	}

	render() {
		console.log("RENDER APP", this);
		// TODO: App should consist of other things like score display and answer input
		return (
			<div className="app">
				<Board categories={this.props.categories} />
			</div>
		)
	}
}

App.propTypes = {
	categories: PropTypes.array,
	dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	return {
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
