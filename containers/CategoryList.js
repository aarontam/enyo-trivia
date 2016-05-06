import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import CategoryClueList from './CategoryClueList';

class CategoryList extends Component {
	render() {
		let { categories } = this.props;
		return (
			<div className="category-list">
				{categories.map((category, i) =>
					<CategoryClueList key={i} title={category.title} clues={category.clues} />
				)}
			</div>
		);
	}
}

export default connect()(CategoryList);