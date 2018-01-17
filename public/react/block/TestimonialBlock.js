/**
 * A customer recommendation. Provides a quote icon and show the quotees name 
 * and optional company
 * 
 * @attribute (prop) name - the reference's name
 * @attribute (prop) from - optional company or other origin info
 * @attribute (children) quote - the quoted recommendation
 */
class TestimonialBlock extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, from} = this.props;
        const fromText = from?", "+from:"";
        const quote = this.props.children;
        return (
            <div className="col-md-6 testimonial-block">
                <div className="testimonial-inner">
                    <div className="testimonial-icon">
                        <span className="circle">
                            <i className="fa fa-quote-left"></i>
                        </span>
                    </div>
                    <p className="testimonial-desc">“{quote}”</p>
                    <div className="testimonial-name">{name}{fromText}</div>
                </div>
            </div>
        )
    }
}