import React from 'react';

import './declaration.css';

export default class Declaration extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {heading, text} = this.props;
        return (
            <div className="section-space">
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-2 col-md-8 section-title text-center">
                            <h1>{heading}</h1>
                            <p className="lead">{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}