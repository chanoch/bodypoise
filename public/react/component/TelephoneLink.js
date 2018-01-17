/**
 * A phone link shows a phone number. It makes the number clickable to open the
 * default phone app.
 * 
 * @attribute number - the phone number to show
 * 
 * @todo - detect phone enabled devices to disable tel: link in non-enabled devices
 */
class TelephoneLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {number} = this.props;
        const telLink = "tel:"+number;
        return (
            <a href={telLink}>{number}</a>
        )
    }
}