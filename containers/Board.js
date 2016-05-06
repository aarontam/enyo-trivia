import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import CategoryList from './CategoryList';

class Board extends Component {
	componentWillMount() {
		const { actions, categories } = this.props;
		actions.randomCategories(6);
	}

	render() {
		let { actions, categories, clues } = this.props;
		console.log("RENDER THE BOARD", this);

		categories.forEach((category) => {
			// let catClues = clues.filter((clue) => {
			// 	return clue.category_id === category.id;
			// });

			// if (catClues.length >= 5) {
			// 	category.clues = catClues;
			// } else {
			// 	actions.categoryClues(category.id);
			// }

			console.log("WE ADDED CLUES TO THE CATEGORY", category);
		});
		return (
			<div className="board">
				I am the Board
				<CategoryList categories={categories}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		clues: state.clues,
		categories: state.categories
	};
}

export default connect(mapStateToProps)(Board);
