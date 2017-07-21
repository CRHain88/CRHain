import React, { Component } from 'react';

export default class Copyright extends Component {
    getDate() {
        return new Date().getFullYear();
    }

    render() {
        const styles = {
            borderTop: '1px solid #ccc',
            color: 'rgba(0,0,0,.7)',
            fontFamily: 'sans-serif',
            fontSize: '.675rem',
            lineHeight: '1.5',
            margin: '1rem auto 0',
            maxWidth: '620px',
            padding: '1rem 0 0',
            width: 'calc(100% -2rem)',
        };

        return (
            <p style={styles}>
                <strong>&copy;2011–{this.getDate()} CRHain Design LLC.</strong> All rights reserved. Logos, graphics, and writing of work samples copyright of their respective owners. Views expressed on this site are those of CRHain Design LLC, and not necessarily reflect those of the client or employer.
            </p>
        );
    }
}
