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