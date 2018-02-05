import React from 'react';

import './footer.css';

import Link from '../../components/Link';
import EmailLink from '../../components/EmailLink';
import PhoneLink from '../../components/PhoneLink';

import menu from '../../data/menu.json';
import global from '../../data/global.json';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var menuItems = menu.items.map((item) => {
            return (<li key={item.id}>
                <Link href={item.href} title={item.title}>{item.text}</Link>
            </li>);
        });
    
        return (
            <div className="footer">
            <div className="container">
                <div className="row">
                <div className="col-md-3 footer-widget">
                    <h3 className="footer-widget-title">Quick links</h3>
                    <ul className="listnone arrow">
                        {menuItems}
                    </ul>
                </div>

                <div className="col-md-3 footer-widget">
                    <h3 className="footer-widget-title">My Details</h3>
                    <ul className="listnone">
                        <li>Stirchley, Birmingham</li>
                        <li> Phone : <PhoneLink number={global.phone} /></li>
                        <li> Email : <EmailLink email={global.email} subject={global.emailSubject} /></li>
                    </ul>
                </div>

                <div className="col-md-3 footer-widget">
                    <h3 className="footer-widget-title">Location</h3>
                    <p>
                        <span className="footer-widget-title">The Hub Hazelwell</span><br/>
                        <a href={global.locations.hubhazelwell.googlemap_link} target="_new" className="btn-link">View Location</a><br/>
                        {global.locations.hubhazelwell.address.map((line, index) => {
                            return (<span key={index}>{line}<br/></span>);
                        })}
                    </p>
                    <EmailLink email={global.locations.hubhazelwell.email} /><br/>
                    <PhoneLink number={global.locations.hubhazelwell.phone} />
                </div>

                <div className="col-md-3 footer-widget">
                    <h3 className="footer-widget-title">About us</h3>
                    <p>A friendly, personalised service by a qualified physiotherapist, Pilates instructor and acupuncturist.</p>
                    <p>Heather has been operating as a Pilates instructor for over 4 years.</p>
                </div>

                </div>

                {/*}
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
                */}

            </div>
            </div>
        )
    }
}