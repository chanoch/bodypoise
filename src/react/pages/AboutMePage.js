import React from 'react';

import Layout from './Layout';

export default class AboutMePage extends React.Component {
    constructor(props) {
        super(props);
        context: props.context;
    }

    render() {
        return (
            <Layout active="About Me">
                About Me
            </Layout>
        )
    }
}