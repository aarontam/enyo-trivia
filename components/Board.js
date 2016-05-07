import React from 'react';
import ClueBoxContainer from '../containers/ClueBoxContainer';

const CategoryClueList = ({category}) =>
	<div className="category-clue-list">
		<div className="category-title">{category.title}</div>
		<ClueList clues={category.clues} />
	</div>

const ClueList = ({clues}) =>
	<div className="clue-list">
		{clues && clues.map((clue) =>
			<ClueBoxContainer key={clue.id} clue={clue} />
		)}
	</div>


const Board = ({ categories }) =>
	<div className="board">
		{categories && categories.map((category) =>
			<CategoryClueList category={category} />
		)}
	</div>

export default Board;
