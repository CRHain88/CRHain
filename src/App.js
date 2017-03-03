import React, { Component } from 'react';
import RecentWork from './containers/recent-work.js';
import Offerings from './containers/offerings.js';
import SiteFooter from './components/site-footer.js';

// export default class App extends Component {
//     render() {
//         return (
//             <div>
//                 <RecentWork />
//                 <Offerings />
//                 <SiteFooter />
//             </div>
//         );
//     }
// }

export default class App extends Component {
    render() {
        return (
            <div>
                <Article />
            </div>
        );
    }
}
