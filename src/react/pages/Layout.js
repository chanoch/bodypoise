import React from 'react';

import Header from '../sections/Header';

import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import Copyright from '../sections/Copyright';

import global from '../data/global.json';

import BackToTop from '../components/BackToTop';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        context: props.context;
    }

    render() {
        const {active} = this.props;
        return (
            <div>
                <Header />
                <Navigation active={active}/>
                {this.props.children}
                <Footer />
                <Copyright>{global.copyright}</Copyright>
                <BackToTop />
            </div>
        )
    }
}