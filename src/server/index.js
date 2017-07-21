const path = require('path');
const express = require('express');

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./generated/app');

const port = '8080';

module.exports = {
    app: function() {
        const app = express();
        const indexPath = path.join(__dirname, './index.html');
        const publicPath = express.static(path.join(__dirname));

        console.log(publicPath);

        app.use('/', publicPath);
        app.get('/articles/*', function(_, res) {
            res.sendFile(indexPath);
        });
        app.get('/', function(_, res) {
            res.sendFile(indexPath);
        });

        return app;
    }
};

const app = module.exports.app();
app.listen(port);
console.log(`Listening at http://localhost:${port}`);
