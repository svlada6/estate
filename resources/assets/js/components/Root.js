import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Body from './site/Body.js';
import Footer from './site/Footer.js';

export default class Root extends Component {
    render() {
        return (
           <div>
             <Body/>
             <Footer/>
           </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
