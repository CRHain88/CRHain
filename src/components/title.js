import React, { Component } from 'react';

function Title(props) {
    switch(props.level) {
        case '1':
            return (<h1>{props.children}</h1>);
        case '2':
            return (<h2>{props.children}</h2>);
        case '3':
            return (<h3>{props.children}</h3>);

        default:
            return (<h1>{props.children}</h1>);
    }
}

export default Title;
