import React, { PropTypes, Component } from 'react'

export default class Clues extends Component {
	render() {
		const clues = this.props.clues
		console.log("RENDER CLUES", this);
		return (
			<div>
				{clues.map((clue, i) =>
					<div key={i}>{clue.category.title} for ${clue.value}: {clue.question}</div>
				)}
			</div>
		)
	}
}

Clues.propTypes = {
	clue: PropTypes.object
}
