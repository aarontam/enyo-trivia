import React, { PropTypes, Component } from 'react'

export default class Clue extends Component {
	render() {
		const clue = this.props.clue
		return (
			<ul>
				<li>{clue.category.title} for ${clue.value}</li>
				<li>{clue.question}</li>
			</ul>
		)
	}
}

Clue.propTypes = {
	clue: PropTypes.object.isRequired
}
