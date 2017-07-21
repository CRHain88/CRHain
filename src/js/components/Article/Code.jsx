import React from 'react';
import reactCss from 'reactcss';

/* eslint-disable no-unused-vars */
import { Prism } from 'prismjs';
import { PrismSass } from 'prismjs/components/prism-sass';
/* eslint-enable no-used-vars */

import { PrismCode } from 'react-prism';

import { BASELINE } from './_CONSTANTS';
import CodeToggle from './CodeToggle';

// import ReactMarkdown from '../../../../../../markdown-to-react-components/src';
// import Renderer from '../../../../../../markdown-to-react-components/src/renderers';



class Code extends React.Component {
    render() {
        const { props } = this;
        const styles = reactCss({
            'default': {
                codeBlock: {
                    backgroundColor: 'rgba(245, 242, 240, 1)',
                    fontFamily: 'monospace',
                    fontSize: '.8571em',
                    lineHeight: BASELINE,
                    margin: `0 auto ${BASELINE}`,
                    padding: BASELINE,
                },
                toggleButton: {
                    display: 'block',
                    width: '100%',
                    border: 0,
                    backgroundColor: '#f5f2f0',
                    textTransform: 'uppercase',
                    color: 'rgba(0,0,0,.18)',
                    fontFamily: 'AmsiProCond-Black',
                    fontSize: '.875rem',
                    lineHeight: '32px',
                    outline: 'none',
                },
            },
        });

        return (
            <div style={{ ...props.style }}>
                <pre style={{ ...styles.codeBlock }}>
                    <PrismCode className={ `language-${props.language}` }>
                        {props.children.trim()}
                    </PrismCode>
                </pre>
            </div>
        );
    }
}

export default Code;
