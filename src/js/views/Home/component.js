import React, { Component, PropTypes } from 'react';
import bounds from 'react-bounds';
import reactCSS from 'reactcss';

import CTA from '../../components/Home/CTA';
import Title from '../../components/Home/Title';
import Paragraph from '../../components/Home/Paragraph';

const propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        teaser: PropTypes.string.isRequired,
        uri: PropTypes.string.isRequired,
    })),
};

const defaultProps = {
    articles: [{
        title: '',
        teaser: '',
        uri: '',
    }],
};

class Home extends Component {
    static bounds() {
        return {
            'width--small': { minWidth: 420 },
            'width--medium': { minWidth: 800 },
            'width--large': { minWidth: 1200 },
        };
    }

    render() {
        const { props } = this;
        const styles = reactCSS({
            'default': {
                teaserContent: {
                    margin: '1rem 0 0',
                },
                title: {
                    maxWidth: '500px',
                    transform: 'translateX(-12px)',
                },
                visualAnchor: {
                    width: '1.5rem',
                    display: 'block',
                    backgroundColor: 'black',
                    transform: 'translateX(10px)',
                },
            },
            'width--medium': {
                article: {
                    display: 'flex',
                    justifyContent: 'space-between',
                },
                title: {
                    alignSelf: 'center',
                    width: '50%',
                    flexShrink: 0,
                    margin: 0,
                    padding: '2rem 0',
                },
                teaserContent: {
                    alignSelf: 'center',
                    textAlign: 'center',
                    padding: '2rem 0',
                },
            },
        },
        {
            'width--small': props.activeBounds.indexOf('width--small') > -1,
            'width--medium': props.activeBounds.indexOf('width--medium') > -1,
            'width--large': props.activeBounds.indexOf('width--large') > -1,
        });

        return (
            <article style={styles.article}>
                <Title style={styles.title}>{props.title}</Title>
                <div style={styles.teaserContent}>
                    <Paragraph>{props.teaser}</Paragraph>
                    <CTA path={props.uri}>Read More</CTA>
                </div>

                {(props.activeBounds.indexOf('width--large') > -1) ?
                    (<i style={styles.visualAnchor}>hi</i>) : null
                }
            </article>
        );
    }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default bounds.wrap(Home);
