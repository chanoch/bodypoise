/**
 * A section is a row on the page which contains blocks of 12 grid units wide. By default
 * it has a 1px line at the top.
 * 
 * It includes its children inside it, including other React commponents, HTML, and plain
 * text.
 * 
 * @attribute (prop) borderClass - border css class to apply
 * @attribute (prop) backgroundClass - background css class to apply
 * @attribute (children) the children to include in the section container
 */
class Section extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {backgroundClass, borderClass, children} = this.props;

        const classes = ["section-space"];
        backgroundClass && classes.push(backgroundClass);
        borderClass && classes.push(borderClass);

        return (
            <div className={classes.join(' ')}>
                <div className="container">
                    {children}
                </div>
            </div>
        )
    }
}