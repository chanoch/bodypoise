class Testimonials extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
<div className="section-space section-color">
  <div className="container">
    <div className="row">
      <div className="col-md-offset-2 col-md-8 section-title text-center">
        <h1>What our clients are saying</h1>
        <p>Read first thing what our valued clients are saying about HalthCare Services.</p>
      </div>
      <div className="row">
        <div className="col-md-6 testimonial-block">{"<!-- testimonial block -->"}
          <div className="testimonial-inner">
            <div className="testimonial-icon"><span class="circle"><i class="fa fa-quote-left"></i></span></div>
            <p class="testimonial-desc">“We have recently switched back to Healthcare Services from our previous homecare agency for an overall better quality of service.”</p>
            <div className="testimonial-name"> - Maria Pole. Vastrapur, <span>Ahmedabad</span></div>
          </div>
        </div>
        {"<!-- /.testimonial block -->"}
        <div className="col-md-6 testimonial-block">{"<!-- testimonial block -->"}
          <div className="testimonial-inner">
            <div className="testimonial-icon"><span class="circle"><i class="fa fa-quote-left"></i></span></div>
            <p class="testimonial-desc">"We knew that Health care was the right choice from the first initial interview. Their professionalism, caring manner, and the focus to meet the needs of our daughter was evident."</p>
            <div className="testimonial-name"> Adam Simth &amp; Debra smith, Ranip,<span> Ahmedabad</span></div>
          </div>
        </div>
        {"<!-- /.testimonial block -->"} 
      </div>
    </div>
  </div>
</div>
        )
    }
}