import React from 'react';
import reactCss from 'reactcss';

class Author extends React.Component {
    render() {
        const { props } = this;
        const styles = reactCss({
            'default': {
                text: {
                    color: 'rgba(0,0,0,.45)',
                    fontFamily: 'sans-serif',
                    fontSize: '.625rem',
                },
                author: {
                    display: 'block',
                    fontWeight: '700',
                },
            },
            'horizontal': {
                wrapper: {
                    borderBottom: '1px solid rgba(0,0,0,.2)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    margin: '0 0 1rem',
                },
                text: {
                    margin: '0 .25rem .25rem',
                },
            },
            'vertical': {
                wrapper: {
                    borderLeft: '1px solid rgba(0,0,0,.2)',
                    height: '100%',
                    padding: '0 1rem',

                    position: 'absolute',
                    right: 0,
                },
            },
        },
        {
            'horizontal': props.isHorizontal,
            'vertical': !props.isHorizontal,
        });

        return (
            <footer style={{...styles.wrapper, ...props.style}}>
                <img
                    src=""
                    width={(props.isHorizontal) ? 30 : 50}
                    height={(props.isHorizontal) ? 30 : 50}
                    style={styles.image}
                />
                <div style={styles.text}>
                    <span style={styles.author}>Christian Hain</span>
                    February 28, 2017
                    </div>
            </footer>
        );
    }
}

export default Author;
