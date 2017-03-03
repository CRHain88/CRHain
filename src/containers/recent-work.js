import React, { Component } from 'react';
import Row from '../components/row.js';
import Title from '../components/title.js';
import Image from '../components/image.js';
import Hero from '../components/hero/hero.js';

export default class RecentWork extends Component {
    render() {
        return (
            <Hero style={{ background: '#1A1725'}}>
                <Image
                    src="http://crhain.com/img/uploads/samples/featured/fre20150913_2x.jpg"
                    style={{ maxWidth: '1000px' }}
                />
                <Row>
                    <Title level="2">Recent Work</Title>
                    <p>A site designed and built with ROI in mind? <strong>#webgoals</strong></p>
                </Row>
            </Hero>
        );
    }
}
