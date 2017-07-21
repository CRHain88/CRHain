import React, { Component } from 'react';

import Home from './component';
import Data from '../../data/post-001.json';

class HomeWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
        };
    }

    componentWillMount() {
        this.setState({
            articles: [Data],
        });

        // fetch('http://crhain.com/data/post-001.json')
        //     .then((response) => (
        //         response.json().then((data) => {
        //             this.setState({
        //                 articles: this.state.articles.concat(data),
        //             });
        //         })
        //     ));
    }

    render() {
        return (this.state.articles[0]) ? (
                <Home
                    title={this.state.articles[0].data.attributes.title}
                    teaser={this.state.articles[0].data.attributes.teaser}
                    uri={this.state.articles[0].links.self}
                />
            ) : null;
    }
}

export default HomeWrapper;
