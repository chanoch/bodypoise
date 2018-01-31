import React from 'react';

import EmailLink from './components/EmailLink';
import PhoneLink from './components/PhoneLink';
import Link from './components/Link';

import About from './sections/About';
import Header from './sections/Header';
import Navigation from './sections/Navigation';
import Footer from './sections/Footer';
import Copyright from './sections/Copyright';
import Services from './sections/Services';
import Declaration from './sections/Declaration';
import FeatureList from './sections/Features';
import Feature from './sections/Features/Feature';

// data
import global from './data/global.json';
import benefits from './data/benefits.json';
import services from './data/services.json';
import declaration from './data/declaration.json';

// styles
import CallToAction from './sections/CallToAction'; // reversable style

// TODO
import Slider from './Slider.jsx';
import BackToTop from './BackToTop.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        context: props.context;
    }

    render() {
        return (

<div>
     <Header>
        <Link link="/"><h1>BodyPoise</h1><h2>{global.strapline}</h2></Link>
        <EmailLink email={global.email} subject={global.emailSubject}/>
        <PhoneLink number={global.phone} />        
    </Header>
    <Navigation />

    {/*<Slider />*/}    
    <FeatureList title={services.title} 
                 description={services.description}
                 classes="section-color"
                 features={services.features} />
    {/* <Services /> */}

    <Declaration heading={declaration.heading} text={declaration.text}/>

    <FeatureList title={benefits.title} 
                 description={benefits.description}
                 classes="section-color"
                 features={benefits.features}/>
    {/* <About /> */}

    <CallToAction link={"mailto:"+global.email} buttonText="Email">
        {global.callToAction} Ring on <PhoneLink number={global.phone} /> or
    </CallToAction>
    <Footer />
    <Copyright>{global.copyright}</Copyright>
    <BackToTop />
</div>

        )
    }
}