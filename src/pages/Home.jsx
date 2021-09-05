import React, { Component } from 'react';
import About from './About';
import Services from './Services';
import WorkExp from './workExp';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import Typical from 'react-typical';

class Home extends Component {
 
render() {
  return (
    <div>
      <div
        id="home"
        className="intro route bg-image"
        style={{ backgroundImage: "url(assets/img/MainBackground.jpg)" }}
      >
        <div className="overlay-itro"></div>
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Sarib Khan</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items">
                  CEO DevFolio,Web Developer,Web Designer,Frontend
                  Developer,Graphic Designer
                </span>
                <strong className="text-slider"></strong>
              </p>
              <p className="Typical">
                <Typical
                  loop={Infinity}
                  steps={[
                    "Developer",
                    1000,
                    "Designer",
                    1000,
                    "Freelancer",
                    1000,
                  ]}
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      <main id="main">
        <About />

        <Services />
        <WorkExp />

        <Portfolio />
        <div
          className="testimonials paralax-mf bg-image"
          style={{ backgroundImage: "url(assets/img/overlay-bg.jpg)" }}
        >
          <div className="overlay-mf"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div id="testimonial-mf" className="owl-carousel owl-theme">
                  <div className="testimonial-box">
                    <div className="author-test">
                      <img
                        src="assets/img/testimonial-2.jpg"
                        alt=""
                        className="rounded-circle b-shadow-a"
                      />
                      <span className="author">Xavi Alonso</span>
                    </div>
                    <div className="content-test">
                      <p className="description lead">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor
                        at sem. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                      </p>
                      <span className="comit">
                        <i className="fa fa-quote-right"></i>
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-box">
                    <div className="author-test">
                      <img
                        src="assets/img/testimonial-4.jpg"
                        alt=""
                        className="rounded-circle b-shadow-a"
                      />
                      <span className="author">Marta Socrate</span>
                    </div>
                    <div className="content-test">
                      <p className="description lead">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor
                        at sem. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                      </p>
                      <span className="comit">
                        <i className="fa fa-quote-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </main>
      <Footer/>
    </div>
  );
    }
}
export default Home;
