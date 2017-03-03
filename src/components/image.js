import React, { Component } from 'react';

function Image(props) {
    return (
        <img
            src={props.src}
            style={Object.assign({}, { width: '100%' }, props.style)}
        />
    );
}

export default Image;
