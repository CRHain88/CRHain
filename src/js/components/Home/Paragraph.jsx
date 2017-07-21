import React from 'react';

import {
    BASELINE,
    BODY_COPY_FONT_SIZE,
    LINE_HEIGHT,
} from './_CONSTANTS';

function Paragraph(props) {
    const styles = {
        color: 'rgba(0,0,0,.7)',
        fontFamily: 'Merriweather, serif',
        fontSize: BODY_COPY_FONT_SIZE,
        fontWeight: 300,
        lineHeight: LINE_HEIGHT,
        margin: `0 auto ${BASELINE}`,
        maxWidth: 620,
        padding: '0 1rem',
    };

    return (
        <p style={{...styles, ...props.style}}>
            {props.children}
        </p>
    );
}

export default Paragraph;
