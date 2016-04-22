import React, { Component } from 'react';
import Row from '../components/row.js';
import Title from '../components/title.js';
import Offering from '../components/offering.js';
import MasonryColumns from '../components/masonry-columns.js';

export default class Offerings extends Component {
    render() {
        return (
            <Row>
                <Title>What I offer</Title>
                <MasonryColumns>
                    <Offering
                        title="Design and development."
                        description="Online and offline. Print and digital."
                    />

                    <Offering
                        title="Big picture ideas."
                        description="Imagine having a website that works with your other marketing efforts on facebook, print ads, etcetera. It could be cool."
                    />

                    <Offering
                        title="Core web competencies."
                        description={'SEO. Analytics. Responsive Design. Oh! and websites that "pop".'}
                    />

                    <Offering
                        title="User-focused design."
                        description="Really, this is marketing, but I want to emphaisize that main goal is giving the users what they want. Or... giving them what you want in a way they want it. ;)"
                    />

                    <Offering
                        title="My cellphone number!"
                        description={'Seriously. No need to settle for "we\'ll reply to your email in 24-48 hours". (610) 568-6038.'}
                    />

                    <Offering
                        title="The other things."
                        description="If your project requires photography, video editing, custom illustration, or whatever else you can think of, I know a few people who can help."
                    />

                    <Offering
                        title="Consulting."
                        description="Maybe you already have a web person and you don't really want to let them go because they're nice and have been with you since day one. I get it. They just need a few fresh ideas, maybe. Some inspiration."
                    />

                    <Offering
                        title="Retainers."
                        description="Need regular designs but don't want a full-time designer? We can work something out."
                    />

                    <Offering
                        title="Empathy."
                        description="If you're a little obsessive compulsive and need a ninth offering here just so the section is even, I got you. Like I wrote earlier, I call that user-focused design. View the page on your phone and you won't even see this paragraph."
                    />
                </MasonryColumns>
            </Row>
        );
    }
}
