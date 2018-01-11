class FeatureBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, children, icon, iconSize, blockSize} = this.props;
        const icons = iconSize + " " + icon;
        const featureClasses = "feature feature-centre " + blockSize;
        return (
            <div className={featureClasses}>
                <div className="feature-icon"><i className={icons}></i></div>
                    <div className="feature-content">
                        <h2>{title}</h2>
                        <p>{children}</p>
                    </div>
            </div>
        )
    }
}