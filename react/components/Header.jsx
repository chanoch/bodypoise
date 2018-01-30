import React from 'react';

import ComponentWithChildren from './ComponentWithChildren.jsx';
import ImageLink from './image/ImageLink.jsx';
import EmailLink from './email/EmailLink.jsx';
import TelephoneLink from './phone/TelephoneLink.jsx';

export default class Header extends ComponentWithChildren {
    constructor(props) {
        super(props);
    }

    render() {
        const {children} = this.props;

        const telComponent = this.getChildOfType("TelephoneLink");
        const emailComponent = this.getChildOfType("EmailLink");
        const imageComponent = this.getChildOfType("ImageLink");
        return (
            <div className="header">
                <div className="container">
                    <div className="row">
                    <div className="col-md-4 header-logo">{imageComponent}</div>
                    <div className="col-md-8 header-text">
                        <span className="text-call">{telComponent}</span>
                        <span className="text-email">{emailComponent}</span>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}