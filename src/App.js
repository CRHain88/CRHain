import React, { Component } from 'react';
import RecentWork from './containers/recent-work.js';
import Offerings from './containers/offerings.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <RecentWork />
                <Offerings />
            </div>
        );
    }
}
