/**
 *  <ImageGallery title="Most insurances accepted" />
 * 
 * Currently this will show a static list of logos 
 * - with blank links
 * - no alt text
 * - className of insurance-logo
 */
class ImageGallery extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {title} = this.props;
        return (
<div className="section-space">
  <div className="container">
    <div className="row">
      <div className="col-md-offset-2 col-md-8 section-title text-center">
        <h1>{title}</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-2 insurance-logo"><a href="#"><img src="images/insurance-logo-1.png" className="img-responsive" alt="" /></a></div>
      <div className="col-md-2 insurance-logo"><a href="#"><img src="images/insurance-logo-2.png" className="img-responsive" alt="" /></a></div>
      <div className="col-md-2 insurance-logo"><a href="#"><img src="images/insurance-logo-3.png" className="img-responsive" alt="" /></a></div>
      <div className="col-md-2 insurance-logo"><a href="#"><img src="images/insurance-logo-4.png" className="img-responsive" alt="" /></a></div>
      <div className="col-md-2 insurance-logo"><a href="#"><img src="images/insurance-logo-1.png" className="img-responsive" alt="" /></a></div>
      <div className="col-md-2 insurance-logo"><a href="#"><img src="images/insurance-logo-2.png" className="img-responsive" alt="" /></a></div>
    </div>
  </div>
</div>
        )
    }
}