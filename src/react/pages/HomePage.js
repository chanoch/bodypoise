import React from 'react';

import Layout from './Layout';

import About from '../sections/About';
import Services from '../sections/Services';
import Declaration from '../sections/Declaration';
import FeatureList from '../sections/Features';
import Feature from '../sections/Features/Feature';

import PhoneLink from '../components/PhoneLink';

// data
import global from '../data/global.json';
import benefits from '../data/benefits.json';
import services from '../data/services.json';
import declaration from '../data/declaration.json';

// styles
import CallToAction from '../sections/CallToAction'; // reversable style

// TODO
// import Slider from '../components/Slider.jsx';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        context: props.context;
    }

    render() {
        return (
            <Layout active="Home">
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
            </Layout>
        )
    }
}