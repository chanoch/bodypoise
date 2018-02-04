import React from 'react';

import Layout from './Layout';

export default class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        context: props.context;
    }

    render() {
        return (
            <Layout active="Contact">
                Contact Me
            </Layout>
        )
    }
}