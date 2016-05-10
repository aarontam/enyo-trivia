import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { revealClue } from '../../actions';
import ClueBox from './ClueBox';

export default class ClueBoxContainer extends Component {
	handleClick(clue) {
		const { dispatch } = this.props;
		dispatch(revealClue(clue));
	}

	render() {
		let { clue } = this.props;
		return (
			<div onClick={this.handleClick.bind(this, clue)}>
				<ClueBox key={clue.id} clue={clue} />
			</div>
		);
	}
}

ClueBoxContainer.propTypes = {
	clue: PropTypes.object.isRequired
};

export default connect()(ClueBoxContainer);