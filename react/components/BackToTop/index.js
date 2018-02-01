import React from 'react';

import ScrollToTop from 'react-scroll-up';

import './backtotop.css';

export default class BackToTop extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollToTop showUnder={160}>
                <div className="cd-top"></div> 
            </ScrollToTop>
        )
    }
}