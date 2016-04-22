import React, { Component } from 'react';
import Row from '../components/row.js';
import Title from '../components/title.js';

export default class RecentWork extends Component {
    render() {
        return (
            <Row>
                <Title>Recent Work</Title>
                <p>A site designed and built with ROI in mind? <strong>#webgoals</strong></p>
            </Row>
        );
    }
}
