import React from 'react';

import '../../styles/section.css';
import './testimonial.css';

import Section from '../Section';

export default class Testimonial extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() { 
        const {sectionSpace, sectionColor, quote, author} = this.props;

        return (
            <Section sectionSpace={sectionSpace} sectionColor={sectionColor}>
                <div className="col-md-12 testimonial-block">
                    <div className="testimonial-inner">
                        <div className="testimonial-icon"><span className="circle"><i className="fa fa-quote-left"></i></span></div>
                        <p className="testimonial-desc">“{quote}”</p>
                        <div className="testimonial-name"> - {author}</div>
                    </div>
                </div>
            </Section>
        )
    }
}