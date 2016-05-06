import React, { PropTypes, Component } from 'react'

function getMode(clue) {
	return clue.opened ? 'question' : 'value'
}

function getText(clue) {
	return clue[getMode(clue)]
}

export default class ClueBox extends Component {
	render() {
		const clue = this.props.clue
		return (
			<div className={'clue-box ' + getMode(clue)}>
				{getText(clue)}
			</div>
		)
	}
}

ClueBox.propTypes = {
	clue: PropTypes.object // need to store clue answer state
}
