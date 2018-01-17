/**
 * Creates a footer block of 'size' grid units wide which has a set of links
 * 
 * @attribute (prop) size - how many grid units to take up horizontally, default of 2
 * @attribute (prop) blockClass - classes to apply to block, space delimited
 * 
 * @class footer-block - styling for the block
 * @class footer-block-title - font color for h3 title
 */
class FooterBlock extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    /**
     * Assign block's classes
     * 
     * - derive size: default 2, accept size equivalent to grid units
     * - add any className value
     */
    getBlockClasses() {
        const {className, size } = this.props;
        const classes = ["col-md-" + (size?size:"2")]
        classes.push(" footer-block");
        className && classes.push(className);
        return classes.join(' ');
    }

    render() {
        const { title } = this.props;
        return (
            <div className={this.getBlockClasses()}>
                <h3 className="footer-block-title">{title}</h3>
                {this.props.children}
            </div>
        )
    }
}