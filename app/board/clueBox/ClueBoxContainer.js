import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateCategoryClue } from '../../../actions';
import ClueBox from './ClueBox';

export default class ClueBoxContainer extends Component {
	handleClick(clue) {
		const { dispatch } = this.props;
		dispatch(updateCategoryClue(clue, { opened: true }));
	}

	render() {
		let { clue } = this.props;
		return (
			<button onClick={this.handleClick.bind(this, clue)}>
				<ClueBox key={clue.id} clue={clue} />
			</button>
		);
	}
}

ClueBoxContainer.propTypes = {
	clue: PropTypes.object
};

export default connect()(ClueBoxContainer);