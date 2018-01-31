import React from 'react';

export default class Feature extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, children, icon, iconSize, description, blockSize} = this.props.feature;
        const icons = iconSize + " " + icon;
        const featureClasses = "feature feature-centre " + blockSize;
        return (
            <div className={featureClasses}>
                <div className="feature-icon"><i className={icons}></i></div>
                    <div className="feature-content">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
            </div>
        )
    }
}