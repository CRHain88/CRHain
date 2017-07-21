import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/App';
import Home from './views/Home/container';
import Article from './views/Article/container';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
    <Router history={ browserHistory }>
        <Route path='/' component={ App }>
            <IndexRoute component={ Home } />
            <Route path='articles/:uri' component={ Article } />
            <Route path='articles' component={ Home } />
        </Route>
    </Router>,
    document.getElementById('app')
);
