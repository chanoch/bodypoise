import React from 'react';

import './copyright.css'

export default class Copyright extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {children} = this.props;
        return (
            <div className="tiny-footer">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <p className="copyright-text">{children}</p>
                </div>
                </div>
            </div>
            </div>
        )
    }
}