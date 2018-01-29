import React from 'react';

export default class AboutBlock extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        var {title, children, link, linkText } = this.props;
        return (
            <div className="col-md-6 about-block">
                <h2>{title}</h2>
                <p>{children}</p>
                <a href={link} className="btn btn-secondary">{linkText}</a> 
            </div>
        )
    }
}