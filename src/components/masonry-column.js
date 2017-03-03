import React, { Component } from 'react';
import classNames from 'classnames';

const defaultProps = {
    columnCount: 1
}

class MasonryColumn extends Component {
    getColumnWidth() {
        return `${100 / this.props.columnCount}%`;
    }

    getColumnStyles() {
        return {
            padding: '0 .5rem',
            width: this.getColumnWidth()
        }
    }

    render() {
        return (
            <div style={this.getColumnStyles()}>
                {this.props.children}
            </div>
        );
    }
}

MasonryColumn.defaultProps = defaultProps;

export default MasonryColumn;
