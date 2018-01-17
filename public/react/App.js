class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            context: props.context,
        }
    }

    render() {
        return (

<div>
    <PageHeader>
        <ImageLink  link="/" 
                    title="Body Poise Home Page" 
                    src="images/logo.png"
                    altText="Body Poise Logo" />        
        <EmailLink email="heather@bodypoise.co.uk" subject="General Query"/>
        <TelephoneLink number="07886 407 274" />        
    </PageHeader>
    <Navigation />
    <Slider />
    <Section>
        <SectionHeader title="Daily health care assist">
            We are one of the leading providers of domiciliary care and health care staffing services.
        </SectionHeader>
        <BlockContainer>
            <FeatureBlock icon="icon-medical-records"
                            title="Residential Care" > 
                Get helpful tips on what to look for when touring residential care facilities.
            </FeatureBlock>
            <FeatureBlock icon="icon-drugs-3"
                            title="Urgent Care at Home">
                Provides convenient walk-in services for individuals of all ages.
            </FeatureBlock>
            <FeatureBlock icon="icon-first-aid-kit"
                            title="Home Live in care">
                Many families struggle to make decisions about the best living situation for their aging.
            </FeatureBlock>
        </BlockContainer>
    </Section>
    <Section backgroundClass="section-color">
        <SectionHeader title="Services">
            We offer the following services:
        </SectionHeader>
        <Services />
    </Section>
    <Section>
        <SectionHeader title="About Body Poise" leaderClasses="lead">
            We help <strong>children, adults, seniors </strong>and the disabled with all activities of daily living right from dressing.
        </SectionHeader>
        <div className="row">
            <HalfBlock title="Who we are" 
                        link="team-listing.html" 
                        linkText="Meet The Team">
                More than 20 years of providing innovative solutions that improve health and
                quality of life for those in need of in-home health services. 
                <strong>Staff on call 24 hours a day</strong>, 
                seven days a week, to help ensure continuity.
            </HalfBlock>
            <HalfBlock title="What we offer" 
                        link="service-listing-image.html"
                        linkText="View Services">
                Service is focused on patients and <strong>dedicated to delivering quality     
                patient care</strong> and service—all supported by a nationwide network of 
                experienced healthcare professionals and staff.
            </HalfBlock>
        </div>
    </Section>
    <Section backgroundClass="section-color">
        <SectionHeader title="What our client is saying">
                Read first thing what our valued clients are saying about HealthCare Services.
            </SectionHeader>
        <div className="row">
            <TestimonialBlock name="Maria Pole. Vastrapur" from="Amedabad">
                We have recently switched back to Healthcare Services from our 
                previous homecare agency for an overall better quality of service.
            </TestimonialBlock>
            <TestimonialBlock name="Adam &amp; Debra Smith, Ranip" from="Amedabad">
                We knew that Health care was the right choice from the first initial interview. 
                Their professionalism, caring manner, and the focus to meet the needs of our daughter
                was evident.
            </TestimonialBlock>
        </div>
    </Section>

    <Section>
        <SectionHeader title="Why choose our health care">
            More than 20 years of providing innovative solutions that improve health and quality of life.
        </SectionHeader>
        <BlockContainer>
            <FeatureBlock icon="icon-coffee-cup"
                            title="Quality Care" > 
                Health care center providing quality care for the elderly, children, adult.
            </FeatureBlock>
            <FeatureBlock icon="icon-document"
                            title="Certified Healthcare" > 
                Health care is Licensing and Certification is a unit in the Division of Health Care Services.
            </FeatureBlock>
            <FeatureBlock icon="icon-avatar"
                            title="Professional Staff"> 
                Professionals and Experienced staff provide the most timely &amp; efficient services possible.
            </FeatureBlock>
            <FeatureBlock icon="icon-calendar"
                            title="24 Hours a Day" > 
                Safe environments with friendly and professional teams of highly trained staff 24 hours a day
            </FeatureBlock>
        </BlockContainer>
    </Section>

    <CallToAction link="contact-us.html" buttonText="Contact Us">
        Do You Need Private Home Care Specialists? Call +1 800 234 5678
    </CallToAction>
    <Footer />
    <TinyFooter>@ 2018 Body Poise. All Reserved.</TinyFooter>
    <BackToTop />
</div>

        )
    }
}