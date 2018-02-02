import React from 'react';

import AboutBlock from './AboutBlock';

export default class About extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bdr-top">
                <div className="container">
                    <div className="row">
                        <AboutBlock title="Who we are" 
                                    link="team-listing.html" 
                                    linkText="Meet The Team">
                            More than 20 years of providing innovative solutions that improve health and
                            quality of life for those in need of in-home health services. 
                            <strong>Staff on call 24 hours a day</strong>, 
                            seven days a week, to help ensure continuity.
                        </AboutBlock>
                        <AboutBlock title="What we offer" 
                                    link="service-listing-image.html"
                                    linkText="View Services">
                            Service is focused on patients and <strong>dedicated to delivering quality     
                            patient care</strong> and service—all supported by a nationwide network of 
                            experienced healthcare professionals and staff.
                        </AboutBlock>            
                    </div>
                </div>
            </div>
        )
    }
}