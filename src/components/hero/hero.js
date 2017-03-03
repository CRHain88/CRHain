import React from 'react';

function Hero(props) {
    return (
        <div style={props.style}>{props.children}</div>
    );
}

export default Hero;
