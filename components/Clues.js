import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import ClueBox from './ClueBox'
import { updateCategoryClue } from '../actions';

export default class Clues extends Component {
	handleClick(clue) {
		const { dispatch } = this.props
		dispatch(updateCategoryClue(clue, { opened: true }))
	}
	render() {
		const clues = this.props.clues
		return (
			<div>
				{clues.map((clue, i) =>
					<button onClick={this.handleClick.bind(this, clue)}>
						<ClueBox key={i} clue={clue} />
					</button>
				)}
			</div>
		)
	}
}

Clues.propTypes = {
	clues: PropTypes.array
}

export default connect()(Clues)