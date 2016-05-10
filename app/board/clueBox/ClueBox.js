import React from 'react';

function getMode(clue) {
	return clue.opened ? 'question' : 'value'
}

function getText(clue) {
	return clue[getMode(clue)]
}

export default ({clue}) =>
	<div className={'clue-box ' + getMode(clue)}>
		{getText(clue)}
	</div>