import React from 'react';

export default class Slider extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
<div className="slider">
  <div>
    <div className="slider-img"><img src="./images/slider-1.jpg" alt="" className=""/></div>
    <div className="container">
      <div className="row">
        <div className="slider-captions">
          <h1 className="slider-title">Quality training leads to <strong> excellence &amp; skilled</strong> in caregiving</h1>
          <p className="slider-text">Healthcare staff are carefully selected to ensure that clients only receive the most professional, skilled care.</p>
          <a href="service-listing-image.html" className="btn btn-primary btn-lg">View Service</a> </div>
      </div>
    </div>
  </div>

  <div>
    <div className="slider-img"><img src="./images/slider-2.jpg" alt="" className=""/></div>
    <div className="container">
      <div className="row">
        <div className="slider-captions">
          <h1 className="slider-title">Healthcare is the best in-home <strong>care for seniors</strong> &amp; <strong>disabled adults</strong></h1>
          <p className="slider-text">Healthcare offers quality for the elderly and people of all ages to give you the peace of mind you need.</p>
          <a href="location.html" className="btn btn-primary btn-lg">Find Locations</a> </div>
      </div>
    </div>
  </div>

  <div>
    <div className="slider-img"><img src="./images/slider-3.jpg" alt="" className=""/></div>
    <div className="container">
      <div className="row">
        <div className="slider-captions">
          <h1 className="slider-title">Providing Health Care Service for <strong>Adults, Seniors &amp; Children</strong></h1>
          <p className="slider-text">Healthcare Services has established itself as one of the most experienced homecare companies in the industry.</p>
          <a href="repair-team.html" className="btn btn-default btn-lg">Meet The Team</a> </div>
      </div>
    </div>
  </div>
</div>
        )
    }
}