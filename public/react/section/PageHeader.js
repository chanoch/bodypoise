/**
 * A section with a logo, an optional contact telephone number and an optional 
 * contact email address
 * 
 * @attribute (Child) @see TelephoneLink contact phone number
 * @attribute (Child) @see EmailLink contact email address
 * @attribute (Child) @see ImageLink logo image with optional link
 */
class PageHeader extends ComponentWithChildren {
    constructor(props) {
        super(props);
    }

    render() {
        const {children} = this.props;

        const telComponent = this.getChildOfType("TelephoneLink");
        const emailComponent = this.getChildOfType("EmailLink");
        const imageComponent = this.getChildOfType("ImageLink");
        return (
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 header-logo">{imageComponent}</div>
                        <div className="col-md-8 header-text">
                            <span className="text-call">{telComponent}</span>
                            <span className="text-email">{emailComponent}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}