// @TODO
// Look into a way to have a compoent that determines what sub components to
// render, but still allows the parent to dictate the style.

import React, { PropTypes } from 'react';
import bounds from 'react-bounds';
import reactCSS from 'reactcss';

import Code from './Code';
import Image from './Image';
import Paragraph from './Paragraph';
import PullQuote from './PullQuote';

import { BASELINE } from '../../components/Article/_CONSTANTS';

class ElementSelector extends React.Component {
    render() {
        const { props } = this;

        return (
            (typeof props.content === 'string') ? (
                <Paragraph>{props.content}</Paragraph>
            ) : (
                <div>
                    {(() => {
                        switch (props.content.type) {
                            case 'image':
                                return (
                                    <Image
                                        src={props.content.src}
                                        height={props.content.height}
                                        width={props.content.width}
                                        alt={props.content.alt}
                                    />
                                );
                            case 'pullquote':
                                return (
                                    <PullQuote>
                                        {props.content.quote}
                                    </PullQuote>
                                );
                            default:
                                return null;
                        }
                    })()}
                </div>
            )
        )
    }
}

// ElementSelector.propTypes = propTypes;
// ElementSelector.defaultProps = defaultProps;

export default ElementSelector;
