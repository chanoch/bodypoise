import React from 'react';

export default class Logos extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
<div className="section-space">
  <div className="container">
    <div className="row">
      <div className="col-md-offset-2 col-md-8 section-title text-center">
        <h1>Most insurance accepted</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-2 insurance-logo"><a href="#"><img src="images/insurance-logo-1.png" className="img-fluid" alt="" /></a></div>
      <div className="col-md-2 insurance-logo"><a href="#"><img src="images/insurance-logo-2.png" className="img-fluid" alt="" /></a></div>
      <div className="col-md-2 insurance-logo"><a href="#"><img src="images/insurance-logo-3.png" className="img-fluid" alt="" /></a></div>
      <div className="col-md-2 insurance-logo"><a href="#"><img src="images/insurance-logo-4.png" className="img-fluid" alt="" /></a></div>
      <div className="col-md-2 insurance-logo"><a href="#"><img src="images/insurance-logo-1.png" className="img-fluid" alt="" /></a></div>
      <div className="col-md-2 insurance-logo"><a href="#"><img src="images/insurance-logo-2.png" className="img-fluid" alt="" /></a></div>
    </div>
  </div>
</div>
        )
    }
}