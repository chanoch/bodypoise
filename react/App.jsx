import React from 'react';

import EmailLink from './components/email/EmailLink.jsx';
import TelephoneLink from './components/phone/TelephoneLink.jsx';
import ImageLink from './components/image/ImageLink.jsx';

import Header from './components/Header.jsx';

import AboutBlock from './AboutBlock.jsx';
import BackToTop from './BackToTop.jsx';
import BdrTop from './BdrTop.jsx';
import CallToAction from './CallToAction.jsx';
import FeatureList from './FeatureList.jsx';
import FeatureBlock from './FeatureBlock.jsx';
import Navigation from './Navigation.jsx';
import Slider from './Slider.jsx';
import SectionSpace from './SectionSpace.jsx';
import Services from './Services.jsx';

import Footer from './Footer.jsx';
import TinyFooter from './TinyFooter.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            context: props.context,
        } 
    }

    render() {
        return (

<div>
     <Header>
        <ImageLink  link="/" 
                    title="Body Poise Home Page" 
                    src="images/logo.png"
                    altText="Body Poise Logo" />        
        <EmailLink email="heather@bodypoise.co.uk" subject="General Query"/>
        <TelephoneLink number="07886 407 274" />        
    </Header>
    <Navigation />
    <Slider />
    <FeatureList title="Daily health care assistance" 
                 description="We are one of the leading providers of domiciliary care and health care staffing services.">
        <FeatureBlock icon="icon-medical-records"
                        title="Residential Care" > 
            Get helpful tips on what to look for when touring residential care facilities.
        </FeatureBlock>
        <FeatureBlock icon="icon-drugs-3"
                        title="Urgent Care at Home">
            Provides convenient walk-in services for individuals of all ages.
        </FeatureBlock>
        <FeatureBlock icon="icon-first-aid-kit"
                        title="Home Live in care">
            Many families struggle to make decisions about the best living situation for their aging.
        </FeatureBlock>
    </FeatureList>
    <Services />
    <SectionSpace />

    <BdrTop>
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
    </BdrTop>

    <FeatureList title="Why choose our health care" 
                 description="More than 20 years of providing innovative solutions that improve health and quality of life."
                 classes="section-color">
        <FeatureBlock icon="icon-coffee-cup"
                        title="Quality Care" > 
            Health care center providing quality care for the elderly, children, adult.
        </FeatureBlock>
        <FeatureBlock icon="icon-document"
                        title="Certified Healthcare" > 
            Health care is Licensing and Certification is a unit in the Division of Health Care Services.
        </FeatureBlock>
        <FeatureBlock icon="icon-avatar"
                        title="Professional Staff"> 
            Professionals and Experienced staff provide the most timely &amp; efficient services possible.
        </FeatureBlock>
        <FeatureBlock icon="icon-calendar"
                        title="24 Hours a Day" > 
            Safe environments with friendly and professional teams of highly trained staff 24 hours a day
        </FeatureBlock>
    </FeatureList>

    <CallToAction link="contact-us.html" buttonText="Contact Us">
        Do You Need Private Home Care Specialists? Call +1 800 234 5678
    </CallToAction>
    <Footer />
    <TinyFooter>@ 2018 Body Poise. All Reserved.</TinyFooter>
    <BackToTop />
</div>

        )
    }
}