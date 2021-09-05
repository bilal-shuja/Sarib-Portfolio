import React from "react";

const Services = () => {
  return (
    <>
      <section id="service" className="services-mf pt-5 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Services</h3>
                <p className="subtitle-a">
                  The serivces that our company provide.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <i className="ion-monitor"></i>
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Web Design</h2>
                  <p className="s-description text-center">
                    Role of a website is regularly increasing in our routine
                    life and nothing is possible without the help of a website.
                    Website is an excellent...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <i className="ion-code-working"></i>
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Web Application</h2>
                  <p className="s-description text-center">
                    US-Softs offers wide-ranging web services. We integrate
                    advanced web technologies for seamless and interactive
                    website development...
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><img src="assets/img/blender.png" className="blender" alt="" /></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Character Designing</h2>
                <p className="s-description text-center">
                  US-Softs acknowledge the entire concept, style, and artwork of a character from scratch. This often includes a deep look into the character's personality to develop a visual idea of the character's physical features...
                </p>
              </div>
            </div>
          </div> */}
            <div className="col-md-6">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <i className="ion-android-phone-portrait"></i>
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">App Development</h2>
                  <p className="s-description text-center">
                    US-Softs cover end-to-end development of mobile apps, from
                    business analysis and UI/UX design to mobile application
                    testing and deployment or online market publication.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i className="ion-paintbrush"></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Graphic Design</h2>
                <p className="s-description text-center">
                US-Softs stands out among others when it comes to Graphic designing. Our graphics work and illustrations for various fields like Social Networking...
                </p>
              </div>
            </div>
          </div> */}
            <div className="col-md-6">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <i className="ion-stats-bars"></i>
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Digital Marketing</h2>
                  <p className="s-description text-center">
                    US-Softs provides promotion of brands to connect with
                    potential customers using the internet and other forms of
                    digital communication including email, social media,
                    web-based advertising and marketing channel....
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
