import React, { Component } from 'react';

import Article from './component';
import Data from '../../data/post-001.json';

class ArticleWrapper extends Component {
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
                <Article
                    title={this.state.articles[0].data.attributes.title}
                    content={this.state.articles[0].data.attributes.content}
                    uri={this.state.articles[0].links.self}
                />
            ) : null;
    }
}

export default ArticleWrapper;
