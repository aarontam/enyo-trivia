import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class CategoryClueList extends Component {
	render() {
		console.log("RENDER CATEGORYCLUELIST", this);
		return (
			<div className="category-clue-list">
				<div className="category-name">Category Name</div>
				<div className="clue-list">clue boxes go here</div>
			</div>
		);
	}
}

export default CategoryClueList;
