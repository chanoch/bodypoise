import React from 'react';

import Layout from './Layout';
import Section from '../sections/Section';
import Testimonial from '../sections/Testimonial';

import ImageBlock from '../components/ImageBlock';
import ContentBlock from '../components/ContentBlock';
import Declaration from '../sections/Declaration';

import about from '../data/about.json';

export default class AboutMePage extends React.Component {
    constructor(props) {
        super(props);
        context: props.context;
    }

    render() {
        return (
            <Layout active="About Me">
                <Section sectionSpace sectionColor>
                    <ImageBlock img={about.img} alttext={about.alttext} />
                    <ContentBlock title={about.title} content={about.content} />
                </Section>
                <Testimonial sectionSpace quote={about.mypassion.quote} author={about.mypassion.author} />
                <Section sectionSpace sectionColor>
                    <Declaration title={about.strengthen.title} text={about.strengthen.text} />
                </Section>
                <Testimonial sectionSpace quote={about.contactme.quote} author={about.contactme.author} />
                <Section sectionSpace sectionColor>
                    <Declaration title={about.chronicsupport.title} text={about.chronicsupport.text} />
                </Section>
            </Layout>
        )
    }
}