import React from 'react';

import { ARTICLE_SPACING } from './_CONSTANTS';

function ArticleWrapper(props) {
    const styles = {
        wrap: {
            position: 'relative',
            height: '100%',
        },
        component: {
            height: '100%',
            margin: `${ARTICLE_SPACING} auto 0`,
        },
    };

    return (
        <article style={styles.wrap}>
            <div style={{...styles.component, ...props.style}}>
                {props.children}
            </div>
        </article>
    );
}

export default ArticleWrapper;
