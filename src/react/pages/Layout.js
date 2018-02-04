import React from 'react';

import EmailLink from '../components/EmailLink';
import PhoneLink from '../components/PhoneLink';
import Link from '../components/Link';

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
                <Header>
                    <Link href="/" title="Body Poise Home"><h1>BodyPoise</h1><h3>{global.strapline}</h3></Link>
                    <EmailLink email={global.email} subject={global.emailSubject}/>
                    <PhoneLink number={global.phone} />        
                </Header>
                <Navigation active={active}/>
                {this.props.children}
                <Footer />
                <Copyright>{global.copyright}</Copyright>
                <BackToTop />
            </div>
        )
    }
}