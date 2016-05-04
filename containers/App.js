import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { randomClue, randomCategories } from '../actions'
import Categories from '../components/Categories'
import Clues from '../components/Clues'

class App extends Component {

	componentDidMount() {
		const { dispatch } = this.props
		dispatch(randomClue())
		dispatch(randomCategories())
	}

	render() {
		const { clues, categories } = this.props

		// TODO: not sure if there is a more idiomatic way of doing this, but if not, we should
		// consider adding support for conditionally rendering components
		return (
			<div>
				{categories && <Categories categories={categories} />}
				{clues && <Clues clues={clues} />}
			</div>
		)
	}
}

App.propTypes = {
	clues: PropTypes.array,
	categories: PropTypes.array,
	dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
	return {
		clues: state.data.clues,
		categories: state.data.categories
	}
}

export default connect(mapStateToProps)(App)
