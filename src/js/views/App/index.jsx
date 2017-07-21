import React, { Component } from 'react';
import { Link } from 'react-router';

import Copyright from '../../components/Global/Copyright';
import Logo from '../../components/Global/Logo';

export default class App extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className='App'>
                <Link to='/'>
                    <Logo />
                </Link>

                { children }

                <Copyright />
            </div>
        );
    }
}
