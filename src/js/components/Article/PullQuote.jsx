import React from 'react';

import {
    BASELINE,
    LINE_HEIGHT,
} from './_CONSTANTS';

function PullQuote(props) {
    const styles = {
        // float: 'right',
        fontFamily: 'AmsiProCond-BoldItalic',
        fontStyle: 'italic',
        fontSize: '1.4285em',
        margin: `2px auto ${BASELINE}`,
        lineHeight: LINE_HEIGHT,
    };

    return (
        <blockquote style={{ ...styles, ...props.style }}>
            {props.children}
        </blockquote>
    );
}

export default PullQuote;
