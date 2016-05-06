import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import CategoryClueList from './CategoryClueList';

class CategoryList extends Component {
	render() {
		console.log("RENDER CATEGORY LIST", this);
		let { categories } = this.props;
		return (
			<div className="category-list">
				{categories.map((category, i) =>
					<CategoryClueList key={i} />
				)}
			</div>
		);
	}
}

export default connect()(CategoryList);