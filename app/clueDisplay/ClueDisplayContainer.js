import React, { Component, PropTypes } from 'react';

import ClueDisplay from './ClueDisplay';

class ClueDisplayContainer extends Component {
	render() {
		return (
			<div className="clue-display-container">
				<ClueDisplay clue={this.props.clue}/>
			</div>
		);
	}
}

ClueDisplayContainer.propTypes = {
	clue: PropTypes.object.isRequired
};

export default ClueDisplayContainer;