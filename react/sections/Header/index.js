import React from 'react';

import ComponentWithChildren from '../../ComponentWithChildren';

require('./index.css')

export default class Header extends ComponentWithChildren {
    constructor(props) {
        super(props);
    }

    render() {
        const {children} = this.props;

        const telComponent = this.getChildOfType("PhoneLink");
        const emailComponent = this.getChildOfType("EmailLink");
        const imageComponent = this.getChildOfType("ImageLink");
        const text = this.getChildOfType("Link");
        return (
            <div className="header">
                <div className="container">
                    <div className="row">
                    <div className="col-md-4 header-logo">{imageComponent} {text}</div>
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