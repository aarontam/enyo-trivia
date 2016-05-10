import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions';
import Board from './Board';

class BoardContainer extends Component {

	render() {
		// TODO: App should consist of other things like score display and answer input
		return (
			<div className="board-container">
				<Board categories={this.props.categories} />
			</div>
		)
	}
}

BoardContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);