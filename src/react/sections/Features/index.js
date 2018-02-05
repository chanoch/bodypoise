import React from 'react';

import Feature from './Feature';

import './feature.css';
import '../../styles/section.css';

export default class Features extends React.Component {

    constructor(props) {
        super(props);
    }

    calculateChildSizes(children) {
        var blockSize = "col-md-4", iconSize = "icon-large";
        if(children && children.length && children.length === 4) {
            blockSize = "col-md-3";
            iconSize = "icon-medium";
        }
        return {
            blockSize,
            iconSize,
        };
    }

    render() {
        const { title, description, sectionSpace, sectionColor, features} = this.props;
        const additionalProps = this.calculateChildSizes(features);

        var childrenWithSize = features.map(child => {
            return Object.assign({}, child, additionalProps)
        });
        const classes = [
            sectionSpace?"section-space":"",
            sectionColor?"section-color":"",
         ].join(' ');
        return (
            <div className={classes}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-2 col-md-8 section-title text-center">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className="row">
                        {childrenWithSize.map(feature =>
                            <Feature key={feature.id} feature={feature} />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}