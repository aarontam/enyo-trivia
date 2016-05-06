import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import CategoryList from './CategoryList';

class Board extends Component {
	render() {
		let { categories } = this.props;

		return (
			<div className="board">
				<CategoryList categories={categories}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		categories: state.categories
	};
}

export default connect(mapStateToProps)(Board);
