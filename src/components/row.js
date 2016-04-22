import React, { Component } from 'react';

export default class Row extends Component {
    getRowStyles() {
        return {
            maxWidth: '960px',
            marginLeft: 'auto',
            marginRight: 'auto'
        };
    }

    render() {
        return (
            <div style={this.getRowStyles()}>
                {this.props.children}
            </div>
        );
    }
}
