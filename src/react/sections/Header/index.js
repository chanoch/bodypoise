import React from 'react';

import EmailLink from '../../components/EmailLink';
import PhoneLink from '../../components/PhoneLink';
import Link from '../../components/Link';

import global from '../../data/global.json';

require('./header.css')

export default class Header extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {        
        return (
            <div className="header">
                <div className="container">
                    <div className="row">
                    <div className="col-md-8 header-logo"></div>
                        <div className="col-md-8 header-logo">
                            <Link href="/" title="Body Poise Home">
                                <h1>BodyPoise</h1><h3>{global.strapline}</h3>
                            </Link>
                        </div>
                        <div className="col-md-2 header-text">
                            <span className="text-call">
                                <EmailLink email={global.email} subject={global.emailSubject}/>
                            </span>
                        </div>
                        <div className="col-md-2 header-text">
                            <span className="text-email">
                                <PhoneLink number={global.phone} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}