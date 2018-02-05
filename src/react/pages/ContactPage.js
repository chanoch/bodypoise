import React from 'react';

import Layout from './Layout';

import Declaration from '../sections/Declaration';

import AjaxRecaptchaForm from '../components/contact/AjaxRecaptchaForm';
import ContactForm from '../components/contact/ContactForm';

import contact from '../data/contact.json';

export default class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        context: props.context;
    }

    render() {
        return (
            <Layout active="Contact">
                <div className="section-space section-color">
                    <div className="container">
                        <div className="row">
                            <Declaration title={contact.title} text={contact.text} />
                        </div>
                        <div className="row">
                            <div className="col-md-offset-3 col-md-6">
                                <AjaxRecaptchaForm 
                                    message=""
                                    sitekey="6LfMe0QUAAAAACovgF08FO92SAEPlaLOdKOF27tN">
                                    <ContactForm />
                                </AjaxRecaptchaForm>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}