import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { categoryClues } from '../actions';
import Clues from './Clues';

export default class Categories extends Component {
	handleClick(categoryId) {
		const { dispatch } = this.props;

		dispatch(categoryClues(categoryId));
	}

	// TODO: is this type of function binding the best way to pass data from the element to the
	// event handler?
	render() {
		const categories = this.props.categories;
		return (
			<div>
				{categories.map((category, i) =>
					<div>
						<button key={i} onClick={this.handleClick.bind(this, category.id)}>{category.title}</button>
						<Clues clues={category.clues || []} />
					</div>
				)}
			</div>
		)
	}
}

Categories.propTypes = {
	categories: PropTypes.array
};

function mapStateToProps(state) {
	return {
		categories: (state.categories && state.categories.length) ? state.categories : []
	}

}

export default connect(mapStateToProps)(Categories)
