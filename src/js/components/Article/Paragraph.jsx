import React from 'react';

import {
    BASELINE,
    BODY_COPY_FONT_SIZE,
    LINE_HEIGHT,
} from './_CONSTANTS';

function Paragraph(props) {
    const styles = {
        color: 'rgba(0,0,0,.7)',
        fontSize: BODY_COPY_FONT_SIZE,
        lineHeight: LINE_HEIGHT,
        margin: `0 auto ${BASELINE}`,
        fontFamily: 'Merriweather, serif',
        fontWeight: 300,
        maxWidth: 620,
    };

    return (
        <p
            style={{...styles, ...props.style}}
            dangerouslySetInnerHTML={{__html: props.children}}
        />
    );
}

export default Paragraph;
