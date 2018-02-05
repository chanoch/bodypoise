import React from 'react';

import Layout from './Layout';

import Section from '../sections/Section';
import FeatureList from '../sections/Features';
import Feature from '../sections/Features/Feature';

import PhoneLink from '../components/PhoneLink';

// data
import global from '../data/global.json';
import benefits from '../data/benefits.json';
import services from '../data/services.json';

// styles
import CallToAction from '../sections/CallToAction'; // reversible style

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
                            features={services.features} 
                            sectionSpace />
                            
                <FeatureList sectionSpace title={benefits.title} 
                            description={benefits.description}
                            sectionColor
                            features={benefits.features}/>

                <CallToAction link={"mailto:"+global.email} buttonText="Email">
                    {global.callToAction} Ring on <PhoneLink number={global.phone} /> or
                </CallToAction>
            </Layout>
        )
    }
}