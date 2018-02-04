import React from 'react';
import history from '../History';

import './link.css';

export default class Link extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    transition(event) {
        event.preventDefault();
        event.persist(); 
        const newpathname = event.currentTarget.pathname;       
        document.body.classList.toggle('menu-transition-out'); 
        document.body.classList.toggle('menu-transition-in'); 
        setTimeout(() => {
            document.body.classList.toggle('menu-transition-in'); 
            document.body.classList.toggle('menu-transition-out'); 
            history.push({
                pathname: newpathname
            });
        }, 400);
    }

    render() {
        const {href, title, children} = this.props;
        return (
            <a href={href} title={title} onClick={this.transition}>{children}</a>
        )
    }
}