/**
 * An EmailLink is an email address which opens in the user's default application
 * 
 * @attribute (prop) email - the email address to display
 * @attribute (prop) subject - (optional) the subject of the email
 * 
 * @todo pop in a new window when browser is the default mailto: handler
 */
class EmailLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {email, subject, } = this.props;
        const subjectText = subject&&subject.length>0?"?subject="+subject:""
        const emailLink = "mailto:"+email+"?subject="+subject;
        return (
            <a href={emailLink}>{email}</a>
        )
    }
}