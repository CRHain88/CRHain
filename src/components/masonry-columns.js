import React, { Component } from 'react';
import classNames from 'classnames';

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
        const classes = classNames(styles.container);

        return (
            <dl className={classes}>
                {this.columns}
            </dl>
        );
    }
}

export class MasonryColumn extends Component {
    getColumnWidth() {
        return `${100 / this.props.columnCount}%`;
    }

    render() {
        const classes = classNames(styles.column);

        return (
            <div
                className={classes}
                style={{width: this.getColumnWidth()}}
            >
                {this.props.children}
            </div>
        );
    }
}

const styles = cssInJS({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '-1rem -.5rem 0'
    },
    column: {
        padding: '0 .5rem'
    }
});
