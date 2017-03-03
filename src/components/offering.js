import React, { Component } from 'react';

export default class Offering extends Component {
    getDescriptionStyles() {
        return {
            display: 'inline',
            margin: 0
        }
    }

    getStyles() {
        return {
            marginTop: '1rem'
        }
    }

    getTitleStyles() {
        return {
            display: 'inline',
            fontWeight: 900,
            marginRight: '.3em'
        };
    }

    render() {
        return (
            <div style={this.getStyles()}>
                <dt style={this.getTitleStyles()}>{this.props.title}</dt>
                <dd
                    style={this.getDescriptionStyles()}
                    dangerouslySetInnerHTML={{ __html: this.props.description }}
                />
            </div>
        );
    }
}
