import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default class ClueList extends Component {
    render() {
        let { clues } = this.props;
        return (
            <div className="clue-list">
                {clues && clues.map((clue, i) =>
                    <div key={i}>{clue.question}</div>
                )}
            </div>
        );
    }
}

// export default connect()(ClueList);