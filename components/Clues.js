import React, { PropTypes, Component } from 'react'
import update from 'react-addons-update'
import { connect } from 'react-redux'
import ClueBox from './ClueBox'
import { updateClues } from '../actions';

export default class Clues extends Component {
	handleClick(idx) {
		const { dispatch } = this.props

		var newClue = {},
			newClues
		newClue[idx] = {
			$merge: {
				opened: true
			}
		}
		newClues = update(this.props.clues, newClue)
		dispatch(updateClues(newClues));
	}
	render() {
		const clues = this.props.clues
		return (
			<div>
				{clues.map((clue, i) =>
					<button onClick={this.handleClick.bind(this, i)}>
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

function mapStateToProps(state) {
	return {
		clues: (state.clues && state.clues.length) ? state.clues : []
	}

}

export default connect(mapStateToProps)(Clues)