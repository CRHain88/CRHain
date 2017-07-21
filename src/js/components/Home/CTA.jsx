import React, { PropTypes } from 'react';
import reactCss from 'reactcss';
import { Link } from 'react-router';

const propTypes = {
    styles: PropTypes.string,
    path: PropTypes.string.isRequired,
};

const defaultProps = {};

function CTA(props) {
    const styles = reactCss({
        'default': {
            cta: {
                backgroundImage: 'linear-gradient(-180deg, #404040 0%, #000000 100%)',
                border: '1px solid #000',
                borderRadius: '8px',
                boxSizing: 'border-box',
                color: '#fff',
                display: 'block',
                fontFamily: 'AmsiProNarw-Thin',
                fontWeight: 300,
                letterSpacing: '.075rem',
                letterSpacing: '1px',
                lineHeight: '.75',
                margin: `0 auto`,
                maxWidth: 310,
                padding: '.5rem 1rem',
                textAlign: 'center',
                textDecoration: 'none',
                textTransform: 'uppercase',
                width: 'calc(100% - 2rem)',
            },
        },
    });

    return (
        <Link
            to={props.path}
            style={{...styles.cta, ...props.style}}
        >
            {props.children}
        </Link>
    );
}

CTA.propTypes = propTypes;
CTA.defaultProps = defaultProps;

export default CTA;
