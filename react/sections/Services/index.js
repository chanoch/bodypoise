import React from 'react';

import './service.css';

export default class Services extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
<div className="section-space section-color">
  <div className="container">
    <div className="row">
      <div className="col-md-offset-2 col-md-8 section-title text-center">
        <h1>Health care services</h1>
        <p>We are one of the leading providers of domiciliary care and health care staffing services.</p>
      </div>
       
    </div>
    <div className="row">
      <div className="col-md-3 service-image-block">
        <div className="service-img"> <a href="service-home-health-care.html" title="Home health care Service"> <img src="images/service-1.jpg" alt="" className="img-responsive" /></a></div>
        <div className="service-content">
          <h2><a href="service-home-health-care.html" className="heading-title" title="Service Title">Home health care</a></h2>
          <p>Patients realize that their illness restricts activity in their daily lives, making living alone too difficult.</p>
          <a href="service-home-health-care.html" className="btn-link">Read more</a> </div>
         
      </div>
      
      <div className="col-md-3 service-image-block">
        <div className="service-img"> <a href="service-pediatric-care.html" title="Pediatric Care Service"> <img src="images/service-2.jpg" alt="" className="img-responsive" /></a></div>
        <div className="service-content">
          <h2><a href="service-pediatric-care.html" className="heading-title" title="Service Title">Pediatric care</a></h2>
          <p>Children receive the necessary assistance they need at home to have a safe, healthy, and happy childhood.</p>
          <a href="service-pediatric-care.html" className="btn-link">Read more</a> </div>
         
      </div>
      
      <div className="col-md-3 service-image-block">
        <div className="service-img"> <a href="service-companion-care.html" title="Companion care Service"> <img src="images/service-3.jpg" alt="" className="img-responsive" /></a></div>
        <div className="service-content">
          <h2><a href="service-companion-care.html" className="heading-title" title="Service Title">Companion care</a></h2>
          <p>Ensure your loved one receives the attention and care needed, while delivering the peace of mind.</p>
          <a href="service-companion-care" className="btn-link">Read more</a> </div>
         
      </div>
      
      <div className="col-md-3 service-image-block">
        <div className="service-img"> <a href="service-conditions.html" title="Conditions Treated Service"> <img src="images/service-4.jpg" alt="" className="img-responsive" /></a></div>
        <div className="service-content">
          <h2><a href="service-conditions.html" className="heading-title" title="Service Title">Conditions treated</a></h2>
          <p>Patients with a variety of conditions including disease, cancer, neurological and respiratory disorders and more. </p>
          <a href="service-conditions.html" className="btn-link">Read more</a> </div>
         
      </div>
       
    </div>
  </div>
</div>
        )
    }
}