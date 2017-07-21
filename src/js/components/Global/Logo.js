import React, { Component } from 'react';
import reactCSS from 'reactcss';

export default class Logo extends Component {
    render() {
        const styles = reactCSS({
            'default': {
                image: {
                    position: 'relative',
                    zIndex: '1',
                },
                logoWrapper: {
                    display: 'block',
                    marginTop: '2rem',
                    transform: 'translateX(-13px)',
                    width: '284px',
                },
                textColor: {
                    backgroundColor: 'black',
                    height: '31px',
                    left: '7px',
                    position: 'absolute',
                    top: '18px',
                    width: '138px',
                },
            },
        });

        return (
            <div style={styles.logoWrapper}>
                <img
                    src="http://crhain.com/data/logo20121029.png"
                    style={styles.image}
                    width="200"
                    height="67"
                />
                <i style={styles.textColor} />
            </div>
        );
    }
}
