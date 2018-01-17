/**
 * Component to allow a user to subscribe to updates
 * 
 * @attribute (prop) inputLabel - the label for the input, visible in sr-only - default Email Address
 * @attribute (prop) buttonText - the label for the button to subscribe - default Subscribe
 * @attribute (prop) placeholder - the value for the input placeholder - default Email Address
 * 
* @todo connect to email sender
 */
class Subscribe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {inputLabelAtt, buttonTextAtt, placeholderAtt} = this.props;
        const inputLabel = inputLabelAtt?inputLabelAtt:"Email Address";
        const placeholder = placeholderAtt?placeholderAtt:"Email Address";
        const buttonText = buttonTextAtt?buttonTextAtt:"Subscribe";
        return (

            <form method="post" action="subscribe">
            <div className="row">
                <div className="col-md-8">
                <label for="subscribe" className="sr-only">{inputLabel}</label>
                <input type="email" name="subscribe" className="form-control" id="subscribe" placeholder={placeholder} required />
                </div>
                <div className="col-md-4">
                <button type="submit" className="btn btn-primary btn-block">{buttonText}</button>
                </div>
            </div>
            </form>
        )
    }
}