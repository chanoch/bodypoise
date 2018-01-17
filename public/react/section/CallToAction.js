/**
 * Call to action section. Includes a call to action text with a cta button
 * 
 * Result is:
 *   &lt;h2&gt;children&lt;/h2&gt;
 *   &lt;a href={link}&gt;buttonText&lt;/a&gt;
 * 
 * @attribute (prop) link - call to action destination URL
 * @attribute (prop) buttonText - call to action button text
 * @attribute (child) formattable HTML text for call to action text
 * 
 * @class cta-section-bg - default background color of cta section is none
 * @class cta-section - no default formatting
 * @class cta-section-padding - by default this has top and bottom spacing of 40px
 * @class cta-title - by default this has padding top of 10px
 * @class cta-heading-title - by default the h2 title is white
 * @class cta-title - has a default bottom margin of 5px
 * 
 */
class CallToAction extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
      var {children, link, buttonText, } = this.props;
        return (
          <div className="cta-section-bg cta-section-padding cta-section">
            <div className="container">
              <div className="row">
                <div className="col-md-10 cta-title">
                  <h2 className="cta-heading-title">{children}</h2>
                </div>
                <div className="col-md-2"><a href={link} className="btn btn-secondary btn-block">{buttonText}</a></div>
              </div>
            </div>
          </div>
        )
    }
}