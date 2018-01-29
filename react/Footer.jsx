import React from 'react';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
<div className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-2 footer-widget">
        <h3 className="footer-widget-title">Quick links</h3>
        <ul className="listnone arrow">
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Our services</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </div>

      <div className="col-md-4 footer-widget">
        <h3 className="footer-widget-title">Contact us</h3>
        <ul className="listnone">
          <li> 245 North Spruce Street, Redwood 
            city, California 94061 </li>
          <li> Phone : 413-658-5373</li>
          <li> Email : info@healthcare.com</li>
          <li> We are available 24 hours 
            7 days a week </li>
        </ul>
      </div>

      <div className="col-md-2 footer-widget">
        <h3 className="footer-widget-title">Our Locations</h3>
        <ul className="listnone arrow">
          <li><a href="#">Bapunagar</a></li>
        </ul>
      </div>

      <div className="col-md-4 footer-widget">
        <h3 className="footer-widget-title">About us</h3>
        <p>Health care is well established and trusted care provider providing care for the elderly since 2000.
          We have mulitiple location center.<a href="#" className="btn-link"> View Location</a> </p>
        <p>Health care have comfortable relaxed interiors which are tastefully decorated to high standards.</p>
      </div>

    </div>

    <div className="row footer-newsletter-section">
      <div className="col-md-8 footer-widget newsletter-widget">
        <h3 className="footer-widget-title">Subscribe for newsletter</h3>
        <form method="post" action="newsletter.php">
          <div className="row">
            <div className="col-md-8">
              <label htmlFor="newsletter" className="sr-only">Email address</label>
              <input type="email" name="newsletter" className="form-control" id="newsletter" placeholder="E-Mail Address" required />
            </div>
            <div className="col-md-4">
              <button type="submit" className="btn btn-primary btn-block">Subscribe</button>
            </div>
          </div>
        </form>
      </div>

      <div className="col-md-4 footer-widget footer-social-widget">
        <h3 className="footer-widget-title">Follow me</h3>
        <ul className="listnone">
          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
        </ul>
      </div>
    </div>

  </div>
</div>
        )
    }
}