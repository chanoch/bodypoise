import React from 'react';

import './declaration.css';

/**
 * Title and lead text in the middle
 * 
 * @argument heading - declaration title
 * @argument text - declaration text
 */
export default class Declaration extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, text} = this.props;
        return (
            <div className="col-md-offset-2 col-md-8 section-title text-center">
                <h1>{title}</h1>
                <p className="lead">{text}</p>
            </div>
        )
    }
}