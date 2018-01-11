class FeatureList extends React.Component {

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
        const { title, description, children, classes} = this.props;
        const additionalProps = this.calculateChildSizes(children);
        var childrenWithSize = React.Children.map(children, 
            child => React.cloneElement(child, additionalProps)
        );
        const listClasses = "section-space" + classes?classes:"";
        return (
        <div className={listClasses}>
            <div className="container">

            <div className="row">
                <div className="col-md-offset-2 col-md-8 section-title text-center">
                <h1>{title}</h1>
                <p>{description}</p>
                </div>
            </div>
            <div className="row">
                {childrenWithSize}
            </div>
            </div>
        </div>
        )
    }
}