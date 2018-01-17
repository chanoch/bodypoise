/**
 * Block which fills 6 of 12 in the bootstrap grid
 * 
 * Output format is:
 *   &lt;h2&gt;{title}&lt;/h2&gt;
 *   &lt;p&gt;{children}&lt;/p&gt;
 *   &lt;a& href={link}gt;{linkText}&lt;/a&gt;
 * 
 * @attribute (prop) title - h2 title of block
 * @attribute (prop) link - link URL
 * @attribute (prop) linkText - text for URL
 * @attribute (children) contents of element will be included inside a paragraph p tag. Half blocks can include react components and HTML tags
 * 
 * @todo make container calculate size
 * @todo move header element out?
 * @todo optional button
 * @todo this is same as feature block but with a link and no icon?
 */
class HalfBlock extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        var {title, children, link, linkText } = this.props;
        return (
            <div className="col-md-6 half-block">
                <h2>{title}</h2>
                <p>{children}</p>
                <a href={link} class="btn btn-secondary">{linkText}</a> 
            </div>
        )
    }
}