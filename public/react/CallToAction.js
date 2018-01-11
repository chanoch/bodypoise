class CallToAction extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
      var {children, link, buttonText, } = this.props;
        return (
          <div className="section-default-bg section-space-40 cta-section">
            <div className="container">
              <div className="row">
                <div className="col-md-10 cta-title">
                  <h2 class="heading-title-white">{children}</h2>
                </div>
                <div className="col-md-2"><a href={link} class="btn btn-secondary btn-block">{buttonText}</a></div>
              </div>
            </div>
          </div>
        )
    }
}