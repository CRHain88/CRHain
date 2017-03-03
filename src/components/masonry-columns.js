import React, { Component } from 'react';
import classNames from 'classnames';

import MasonryColumn from './masonry-column';

export default class MasonryColumns extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnCount: 3
        };

        this.columns = [];
    }

    getContainerStyles() {
        return {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: '-1rem -.5rem 0'
        };
    }

    componentWillMount() {
        this.updateColumns();
    }

    componentWillUpdate() {
        this.updateColumns();
    }

    createColumnPlaceholders() {
        this.columns = [];

        for (let i = 0; i < this.state.columnCount; i++) {
            this.columns.push([]);
        }
    }

    separateContentToAppropriateColumn() {
        let currentColumn = 0;

        for (let i = 0; i < this.props.children.length; i++) {
            this.columns[currentColumn].push(this.props.children[i]);

            currentColumn++;

            if (currentColumn >= this.state.columnCount) {
                currentColumn = 0;
            }
        }
    }

    updateColumns() {
        this.createColumnPlaceholders();
        this.separateContentToAppropriateColumn();
        this.wrapColumnContentsInComponent();
    }

    wrapColumnContentsInComponent() {
        for (let i = 0; i < this.state.columnCount; i++) {
            this.columns[i] = (
                <MasonryColumn
                    key={i}
                    columnCount={this.state.columnCount}
                >
                    {this.columns[i]}
                </MasonryColumn>
            );
        }
    }

    render() {
        return (
            <dl style={this.getContainerStyles()}>
                {this.columns}
            </dl>
        );
    }
}
