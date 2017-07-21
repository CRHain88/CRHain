import React from 'react';
import reactCss from 'reactcss';

import { BASELINE } from './_CONSTANTS';

function Title(props) {
    const styles = reactCss({
        'default': {
            title: {
                fontFamily: 'AmsiProCond-Black',
                textTransform: 'uppercase',
                lineHeight: '1.2rem',
                margin: `0 auto ${BASELINE}`,
                fontSize: '1.4285rem',
                letterSpacing: '.075rem',
            },
        },
        'title--large': {
            title: {
                fontSize: '2.25rem',
                lineHeight: '.8',
            },
        },
    },
    {
        'title--large': props.isLarge === true,
    });

    return (
        <h1 style={{...styles.title, ...props.style}}>
            {props.children}
        </h1>
    );
}

export default Title;
