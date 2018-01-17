/**
 * Each section can have an optional header row added with a title, an HTML leader text 
 * as a child with an optional css class to format the leader.
 * 
 * @attribute (prop) title - the h1 title of the section header component
 * @attribute (children) leader text to describe the section
 * @attribute (prop) leaderClasses - css classes to apply to the leader as a string array
 */
class SectionHeader extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, leaderClasses, children} = this.props;
        const classes = leaderClasses?leaderClasses:"";
        return ( 
            <div className="row">
                <div className="offset-md-2 col-md-8 section-title text-center">
                    <h1>{title}</h1>
                    <p className={classes}>{children}</p>
                </div>
            </div>
        )
    }
}