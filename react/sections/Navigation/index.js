import React from 'react';

import './navigation.css';

export default class Navigation extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            context: props.context,
        }
    }

    render() {
        return (
            <div className="navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="navigation">
                            <ul>
{/*}
                                <li className="active"><a href="index.html" title="Home">Home</a></li>
                                <li><a href="about-us-1.html" title="About us" className="animsition-link">About</a>
                                <ul>
                                    <li><a href="about-us-1.html" title="About us v.1" className="animsition-link">About us v.1</a></li>
                                    <li><a href="about-us-2.html" title="About us v.2" className="animsition-link">About us v.2</a></li>
                                </ul>
                                </li>
                                <li><a href="service-listing-image.html" title="Service" className="animsition-link">Our Service</a>
                                <ul>
                                    <li><a href="service-listing-image.html" title="Service With Image" className="animsition-link">Service With 
                                    
                                    Image</a></li>
                                    <li><a href="service-home-health-care.html" title="Home Health Care" className="animsition-link">Home Health 
                                    
                                    Care </a></li>
                                    <li><a href="service-pediatric-care.html" title="Pediatric Care" className="animsition-link">Pediatric Care </a></li>
                                    <li><a href="service-companion-care.html" title="Companion Care" className="animsition-link">Companion Care </a></li>
                                    <li><a href="service-condition.html" title="Condition Treatment" className="animsition-link">Condition 
                                    
                                    Treatment </a></li>
                                </ul>
                                </li>
                                <li><a href="#" title="Feature">Features</a>
                                <ul>
                                    <li><a href="career-list.html" title="Career" className="animsition-link">Career</a>
                                    <ul>
                                        <li><a href="career-list.html" title="Career List" className="animsition-link">Career List</a></li>
                                        <li><a href="career-details.html" title="Career Detail" className="animsition-link">career 
                                        
                                        Detail</a></li>
                                    </ul>
                                    </li>
                                    <li><a href="fees.html" title="Fees" className="animsition-link">Fees</a></li>
                                    <li><a href="faq.html" title="FAQs" className="animsition-link">FAQ's</a></li>
                                    <li><a href="partner.html" title="Partner" className="animsition-link">Partner</a></li>
                                    <li><a href="testimonials.html" title="Testimonials" className="animsition-link">Testimonials</a></li>
                                    <li><a href="error-page.html" title="404 Error" className="animsition-link">404 error</a></li>
                                    <li><a href="#" title="Shortcodes" className="animsition-link">Shortcodes</a>
                                    <ul>
                                        <li><a href="shortcodes-accordion.html" title="Shortcodes Accordion" className="animsition-link">Shortcodes Accordion</a></li>
                                        <li><a href="shortcodes-tabs.html" title="Shortcodes Tabs" className="animsition-link">Shortcodes 
                                        
                                        Tabs</a></li>
                                        <li><a href="shortcodes-alerts.html" title="Shortcodes Alerts" className="animsition-link">Shortcodes 
                                        
                                        Alerts</a></li>
                                        <li><a href="shortcodes-columns.html" title="Shortcodes Columns" className="animsition-link">Shortcodes 
                                        
                                        Columns</a></li>
                                        <li><a href="shortcodes-buttons.html" title="Shortcodes Buttons" className="animsition-link">Shortcodes 
                                        
                                        Buttons</a></li>
                                    </ul>
                                    </li>
                                </ul>
                                </li>
                                <li><a href="contact-us.html" title="Contact Us" className="animsition-link">Contact us</a>
                                <ul>
                                    <li><a href="contact-us.html" title="Contact Us" className="animsition-link">Contact Us</a></li>
                                    <li><a href="location.html" title="Location" className="animsition-link">Location</a></li>
                                </ul>
                                </li>
        */}
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}