class News extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
<div className="section-space">
  <div className="container">
    <div className="row">
      <div className="col-md-offset-2 col-md-8 section-title text-center">
        <h1>Latest news health care</h1>
        <p>Latest news from our blog turpis cursus eleifend hendrerit molestie augue.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 post-block">{"<!-- post block -->"}
        <div className="post-pic"><a href="blog-detail.html" title="Post Images"><img src="images/blog-small-1.jpg" alt="" /></a> <span class="meta-date-bg"><span class="meta-date">25 Jun 2016 </span></span> </div>
        <div className="post-content">
          <h2><a href="blog-detail.html" class="heading-title" title="Post Title">Housing collaboration key to aging in place</a></h2>
          <div className="meta"> <span class="meta-comments"><i class="fa fa-comments"></i> (12) <a href="#">Comments</a> </span> <span class="meta-author">by <a href="#">Admin</a></span> </div>
          <p>Morbi eget mi vel turpis cursus eleifend hendrerit molestie augue. Sed interdum quam sed felis sollicitudin sagittis. </p>
          <a href="blog-detail.html" class="btn btn-default">Read More</a> </div>
      </div>
      {"<!-- /.post block -->"}
      <div className="col-md-4 post-block">{"<!-- post block -->"}
        <div className="post-pic"><a href="blog-detail.html" title="Post Images"><img src="images/blog-small-2.jpg" alt="" /></a> <span class="meta-date-bg"><span class="meta-date">25 Jun 2016 </span></span> </div>
        <div className="post-content">
          <h2><a href="blog-detail.html" class="heading-title" title="Post Title">Caring for aging parents &amp;
            other elderly seniors</a></h2>
          <div className="meta"> <span class="meta-comments"><i class="fa fa-comments"></i> (12) <a href="#">Comments</a> </span> <span class="meta-author">by <a href="#">Admin</a></span> </div>
          <p>Morbi eget mi vel turpis cursus eleifend hendrerit molestie augue. Sed interdum quam sed felis sollicitudin sagittis. </p>
          <a href="blog-detail.html" class="btn btn-default">Read More</a> </div>
      </div>
      {"<!-- /.post block -->"}
      <div className="col-md-4 post-block">{"<!-- post block -->"}
        <div className="post-pic"><a href="blog-detail.html" title="Post Images"><img src="images/blog-small-3.jpg" alt="" /></a> <span class="meta-date-bg"><span class="meta-date">25 Jun 2016 </span></span> </div>
        <div className="post-content">
          <h2><a href="blog-detail.html" class="heading-title" title="Post Title">Health care services eating for 
            seniors at home</a></h2>
          <div className="meta"> <span class="meta-comments"><i class="fa fa-comments"></i> (12) <a href="#">Comments</a> </span> <span class="meta-author">by <a href="#">Admin</a></span> </div>
          <p>Morbi eget mi vel turpis cursus eleifend hendrerit molestie augue. Sed interdum quam sed felis sollicitudin sagittis. </p>
          <a href="blog-detail.html" class="btn btn-default">Read More</a> </div>
      </div>
      {"<!-- /.post block -->"} 
    </div>
  </div>
</div>
        )
    }
}