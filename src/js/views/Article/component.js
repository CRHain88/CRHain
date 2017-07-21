import React, { PropTypes } from 'react';
import bounds from 'react-bounds';
import reactCSS from 'reactcss';

import ArticleWrapper from '../../components/Article/Wrapper';
import Author from '../../components/Article/Author';
import Code from '../../components/Article/Code';
import Paragraph from '../../components/Article/Paragraph';
import PullQuote from '../../components/Article/PullQuote';
import Title from '../../components/Article/Title';
import Image from '../../components/Article/Image';

import { BASELINE } from '../../components/Article/_CONSTANTS';

const propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.array.isRequired,
    })),
};

const defaultProps = {
    articles: [{
        title: '',
        content: [''],
    }],
};

class Article extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: null,
        };
    }

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
                articleWrapper: {
                    maxWidth: '620px',
                    padding: '0 1rem',
                },
                floatCenter: {
                    marginLeft: '-1rem',
                    marginRight: '-1rem',
                },
                floatTitle: {
                    marginLeft: '-1rem',
                },
            },
            'width--small': {
                articleWrapper: {
                    padding: '0 5rem',
                },
                floatTitle: {
                    marginLeft: '-2.5rem',
                },
            },
            'width--medium': {
                floatCenter: {
                    marginLeft: `-${BASELINE}`,
                    marginRight: `-${BASELINE}`,
                },
                floatTitle: {
                    float: 'left',
                    marginBottom: 0,
                    marginLeft: '-5rem',
                    marginRight: '1rem',
                },
                floatPullquote: {
                    float: 'right',
                    marginBottom: 0,
                    marginRight: '-5rem',
                    maxWidth: '17em',
                    padding: `${BASELINE} 0 ${BASELINE} ${BASELINE}`,
                },
                wideImage: {
                    margin: '0 -10rem',
                    width: 'calc(100% + 20rem)',
                }
            },
            'width--large': {
                articleWrapper: {
                    padding: '0 10rem',
                },
                floatTitle: {
                    marginLeft: '-10rem',
                },
                floatPullquote: {
                    maxWidth: '25em',
                    marginRight: '-10rem',
                },
                wideImage: {
                    margin: '0 -20rem',
                    width: 'calc(100% + 40rem)',
                }
            },
        },
        {
            'width--small': props.activeBounds.indexOf('width--small') > -1,
            'width--medium': props.activeBounds.indexOf('width--medium') > -1,
            'width--large': props.activeBounds.indexOf('width--large') > -1,
        });

        return (
            <ArticleWrapper style={styles.articleWrapper}>
                <Title
                    style={styles.floatTitle}
                    isLarge={props.activeBounds.indexOf('width--medium') === -1}
                >
                    {props.title}
                </Title>

                {
                    props.content.map((content, index) => (typeof content === 'string') ? (
                        <Paragraph key={index}>{content}</Paragraph>
                    ) : (
                        <div key={index}>
                            {(() => {
                                switch (content.type) {
                                    case 'image':
                                        return (
                                            <Image
                                                src={content.src}
                                                height={content.height}
                                                width={content.width}
                                                alt={content.alt}
                                                style={styles.wideImage}
                                            />
                                        );
                                    case 'pullquote':
                                        return (
                                            <PullQuote style={styles.floatPullquote}>
                                                {content.quote}
                                            </PullQuote>
                                        );
                                    default:
                                        return null;
                                }
                            })()}
                        </div>
                    ))
                }
            </ArticleWrapper>
        );
    }
}

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;

export default bounds.wrap(Article);
