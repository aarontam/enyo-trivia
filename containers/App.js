import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { randomClue } from '../actions'
import Clue from '../components/Clue'

class App extends Component {

	componentDidMount() {
		const { dispatch } = this.props
		dispatch(randomClue())
	}

	render() {
		const { clue } = this.props

		if (clue) {
			return (
				<div>
					<Clue clue={clue} />
				</div>
			)
		} else {
			return <div>Loading...</div>
		}
	}
}

App.propTypes = {
	clue: PropTypes.object.isRequired,
	dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
	return { clue: state.data.clue }
}

export default connect(mapStateToProps)(App)
