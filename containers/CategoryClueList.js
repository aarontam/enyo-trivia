import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'; // may not need this

import ClueList from './ClueList';

class CategoryClueList extends Component {
	render() {
		return (
			<div className="category-clue-list">
				<div className="category-title">{this.props.title}</div>
				<ClueList clues={this.props.clues}/>
			</div>
		);
	}
}

export default CategoryClueList;
