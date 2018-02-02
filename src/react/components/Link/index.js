import React from 'react';
import history from '../History';

export default class Link extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    transition(event) {
        event.preventDefault();
        history.push({
            pathname: event.currentTarget.pathname
        })
    }

    render() {
        const {href, title, children} = this.props;
        return (
            <a href={href} title={title} onClick={this.transition}>{children}</a>
        )
    }
}