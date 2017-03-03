import React, { Component } from 'react';

const defaultProps = {
    textColor: ''
};

function SiteFooter(props) {
    function getFooterStyles() {
        return {
            borderTop: (props.textColor) ? `1px solid ${props.textColor}` : '1px solid #ddd',
            margin: '1em auto 0',
            maxWidth: '1200px',
            padding: '1em 0'
        }
    }
    function getTextStyles() {
        return {
            textStandard: {
                color: props.textColor,
                fontFamily: 'sans-serif',
                fontSize: '12px',
                margin: '0 auto',
                maxWidth: '500px',
                textAlign: 'center'
            },
            textBold: {
                fontWeight: '700'
            }
        };
    }

    return (
        <footer style={getFooterStyles()} itemscope itemtype="http://schema.org/Organization">
            <p style={getTextStyles().textStandard}>
                <span style={getTextStyles().textBold}>©2011-{new Date().getFullYear()} <span itemProp="legalName">CRHain Design LLC.</span></span> All rights reserved. Logos, graphics, and writing of work samples copyright of their respective owners. Views expressed on this site are those of CRHain Design LLC., and not necessarily reflect those of the employer or client.
            </p>
        </footer>
    );
}

SiteFooter.defaultProps = defaultProps;

export default SiteFooter;
