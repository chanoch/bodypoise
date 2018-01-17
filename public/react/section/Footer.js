/**
 * Site menu footer
*/
class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
<div className="footer">
    <div className="container">
        <div className="row">
            <FooterBlock title="Quick Links">
                <ul className="listnone arrow">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Our services</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </FooterBlock>

            <FooterBlock title="Contact Us" size="4">
                <ul className="listnone">
                    <li>245 North Spruce Street, Redwood city, California 94061</li>
                    <li>Phone : 413-658-5373</li>
                    <li>Email : info@healthcare.com</li>
                    <li>We are available 24 hours 7 days a week</li>
                </ul>
            </FooterBlock> 

            <FooterBlock title="Our Locations">
                <ul className="listnone arrow">
                    <li><a href="#">Bapunagar</a></li>
                </ul>
            </FooterBlock>

            <FooterBlock title="About Us" size="4">
                <p>Health care is well established and trusted care provider providing care for the elderly since 2000.
                We have mulitiple location center.<a href="#" className="btn-link"> View Location</a> </p>
                <p>Health care have comfortable relaxed interiors which are tastefully decorated to high standards.</p>
            </FooterBlock>
        </div>
        <div className="row footer-subscribe-section">
            <FooterBlock title="Subscribe for email updates" size="8">
                <Subscribe />
            </FooterBlock>

            <FooterBlock title="Follow me" size="4" className="footer-social-block">
                <ul className="listnone">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                </ul>
            </FooterBlock>
        </div>

  </div>
</div>
        )
    }
}