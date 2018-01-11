class Navigation extends React.PureComponent {
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
                                <li class="active"><a href="index.html" title="Home">Home</a></li>
                                <li><a href="about-us-1.html" title="About us" class="animsition-link">About</a>
                                <ul>
                                    <li><a href="about-us-1.html" title="About us v.1" class="animsition-link">About us v.1</a></li>
                                    <li><a href="about-us-2.html" title="About us v.2" class="animsition-link">About us v.2</a></li>
                                </ul>
                                </li>
                                <li><a href="service-listing-image.html" title="Service" class="animsition-link">Our Service</a>
                                <ul>
                                    <li><a href="service-listing-image.html" title="Service With Image" class="animsition-link">Service With 
                                    
                                    Image</a></li>
                                    <li><a href="service-home-health-care.html" title="Home Health Care" class="animsition-link">Home Health 
                                    
                                    Care </a></li>
                                    <li><a href="service-pediatric-care.html" title="Pediatric Care" class="animsition-link">Pediatric Care </a></li>
                                    <li><a href="service-companion-care.html" title="Companion Care" class="animsition-link">Companion Care </a></li>
                                    <li><a href="service-condition.html" title="Condition Treatment" class="animsition-link">Condition 
                                    
                                    Treatment </a></li>
                                </ul>
                                </li>
                                <li><a href="#" title="Feature">Features</a>
                                <ul>
                                    <li><a href="career-list.html" title="Career" class="animsition-link">Career</a>
                                    <ul>
                                        <li><a href="career-list.html" title="Career List" class="animsition-link">Career List</a></li>
                                        <li><a href="career-details.html" title="Career Detail" class="animsition-link">career 
                                        
                                        Detail</a></li>
                                    </ul>
                                    </li>
                                    <li><a href="fees.html" title="Fees" class="animsition-link">Fees</a></li>
                                    <li><a href="faq.html" title="FAQs" class="animsition-link">FAQ's</a></li>
                                    <li><a href="partner.html" title="Partner" class="animsition-link">Partner</a></li>
                                    <li><a href="testimonials.html" title="Testimonials" class="animsition-link">Testimonials</a></li>
                                    <li><a href="error-page.html" title="404 Error" class="animsition-link">404 error</a></li>
                                    <li><a href="#" title="Shortcodes" class="animsition-link">Shortcodes</a>
                                    <ul>
                                        <li><a href="shortcodes-accordion.html" title="Shortcodes Accordion" class="animsition-link">Shortcodes Accordion</a></li>
                                        <li><a href="shortcodes-tabs.html" title="Shortcodes Tabs" class="animsition-link">Shortcodes 
                                        
                                        Tabs</a></li>
                                        <li><a href="shortcodes-alerts.html" title="Shortcodes Alerts" class="animsition-link">Shortcodes 
                                        
                                        Alerts</a></li>
                                        <li><a href="shortcodes-columns.html" title="Shortcodes Columns" class="animsition-link">Shortcodes 
                                        
                                        Columns</a></li>
                                        <li><a href="shortcodes-buttons.html" title="Shortcodes Buttons" class="animsition-link">Shortcodes 
                                        
                                        Buttons</a></li>
                                    </ul>
                                    </li>
                                </ul>
                                </li>
                                <li><a href="contact-us.html" title="Contact Us" class="animsition-link">Contact us</a>
                                <ul>
                                    <li><a href="contact-us.html" title="Contact Us" class="animsition-link">Contact Us</a></li>
                                    <li><a href="location.html" title="Location" class="animsition-link">Location</a></li>
                                </ul>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}