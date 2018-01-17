/**
 * A feature block is 3 or 4 grid units wide block which has an icon, a title and a plain
 * text paragraph description.
 * 
 * @attribute (prop) title - the h2 title
 * @attribute (prop) icon - the font awesome css icon class to use
 * @attribute (prop) blockSize - whether to render a 3 grid unit or 4 grid unit block as a css class
 * @attribute (prop) iconSize - the css class to use to size the icon image (medium or large)
 * 
 * @class feature - by default this has a 30px bottom margin
 * @class feature-centre - by default this block styles text in centre of block
 * @class feature-icon - a bottom margin of 30px and styled green
 * @class icon-large and icon-medium - 52px and 42px square by default
 * 
 * @todo make icon optional?
 * @todo pass icon size to this class to size
 */
class FeatureBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, children, icon, iconSize, blockSize} = this.props;
        const iconClasses = iconSize + " " + icon;
        const featureClasses = "text-center feature feature-centre " + blockSize;
        return (
            <div className={featureClasses}>
                <div className="fa feature-icon"><i className={iconClasses}></i></div>
                <div className="feature-content">
                    <h2>{title}</h2>
                    <p>{children}</p>
                </div>
            </div>
        )
    }
}