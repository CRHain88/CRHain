import React from 'react';
import reactCss from 'reactcss';

import { BASELINE } from './_CONSTANTS';

class Code extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false,
        };

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {
        this.setState({ hover: true });
    }

    handleMouseLeave() {
        this.setState({ hover: false });
    }

    handleMouseDown() {
        console.log('clicked');
    }

    render() {
        const { props } = this;
        const styles = reactCss({
            'default': {
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
            'hover': {
                toggleButton: {
                    backgroundColor: '#dbdbdb',
                },
            },
        },
        {
            'hover': this.state.hover,
        });

        return (
            <button
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                onMouseDown={this.handleMouseDown}
                style={{...styles.toggleButton, ...props.style}}
            >
                {props.buttonLabel || 'toggle code'}
            </button>
        );
    }
}

export default Code;
