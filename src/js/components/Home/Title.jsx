import React from 'react';
import reactCss from 'reactcss';

import { BASELINE } from './_CONSTANTS';

function Title(props) {
    const styles = reactCss({
        'default': {
            title: {
                fontFamily: 'AmsiProCond-Black',
                textTransform: 'uppercase',
                lineHeight: '.75',
                margin: `${BASELINE} 0 auto`,
                fontSize: '4rem',
            },
        },
    });

    return (
        <h1 style={{...styles.title, ...props.style}}>
            {props.children}
        </h1>
    );
}

export default Title;
