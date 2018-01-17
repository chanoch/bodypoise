/**
 * A block container is a 'row' of blocks. By default it lays out 3 per line. 
 * If it finds there are four blocks it lays them out 4 to the line.
 * 
 * @todo convert it to accept Blocks in general 
 * @todo is this responsive?
 * @todo eliminate generic row?
 */
class BlockContainer extends ComponentWithChildren {

    constructor(props) {
        super(props);
    }

    calculateChildSizes(features) {
        var blockSize = "col-md-4", iconSize = "icon-large";
        if(features && features.length && features.length === 4) {
            blockSize = "col-md-3";
            iconSize = "icon-medium";
        }
        return {
            blockSize,
            iconSize,
        };
    }

    render() {
        const { children} = this.props;
        const features = this.getChildrenOfType('FeatureBlock');
        const additionalProps = this.calculateChildSizes(features);
        var featuresWithSize = React.Children.map(features, 
            feature => React.cloneElement(feature, additionalProps)
        );
        return (
            <div className="row">
                {featuresWithSize}
            </div>
        )
    }
}