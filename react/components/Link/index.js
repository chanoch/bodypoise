import React from 'react';

export default class Link extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {link, children} = this.props;
        return (
            <a href={link}>{children}</a>
        )
    }
}