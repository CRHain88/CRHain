import React from 'react';

import {
    BASELINE,
    LINE_HEIGHT,
} from './_CONSTANTS';

function Image(props) {
    const styles = {
        height: 'auto',
        width: '100%',
    };

    return (
        <img
            src={props.src}
            height={props.height}
            width={props.width}
            alt={props.alt}
            style={{ ...styles, ...props.style }}
        />
    );
}

export default Image;
