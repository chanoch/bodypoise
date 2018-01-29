import React from 'react';

export default class EmailLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {email, subject, } = this.props;
        const emailLink = "mailto:"+email+"?subject="+subject;
        return (
            <a href={emailLink}>{email}</a>
        )
    }
}