import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <div className="about-img">
                          <img
                            src="assets/img/profile.jpg"
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                          <p>
                            <span className="title-s">Name: </span>{" "}
                            <span>Sarib Khan</span>
                          </p>
                          <p>
                            <span className="title-s">Profile: </span>{" "}
                            <span>Full stack developer</span>
                          </p>
                          <p>
                            <span className="title-s">Email: </span>{" "}
                            <span>saribkhann84@gmail.com</span>
                          </p>
                          <p>
                            <span className="title-s">Phone: </span>{" "}
                            <span>(+92) 320-6226173</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="skill-mf">
                      <p className="title-s">Freelancing Profiles</p>
                      <p>
                        <b>Upwork Profile</b>
                      </p>
                      <div className="about-img">
                        <img
                          src="assets/img/StarItem.png"
                          className="Rating"
                          alt=""
                        />
                      </div>
                      <p>
                        <b>Fiver Profile</b>
                      </p>
                      <div className="about-img">
                        <img
                          src="assets/img/StarItem.png"
                          className="Rating"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skill</p>
                      <span>HTML5</span> <span className="pull-right">85%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow="85"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>CSS3</span> <span className="pull-right">75%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>JAVASCRIPT</span>{" "}
                      <span className="pull-right">90%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>SQLite</span>{" "}
                      <span className="pull-right">80%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>Blender</span>{" "}
                      <span className="pull-right">95%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "95%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>Adobe Character Design</span>{" "}
                      <span className="pull-right">85%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>Adobe Illustrator</span>{" "}
                      <span className="pull-right">100%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About me</h5>
                      </div>
                      <p className="lead">
                        <b>Co-founder and CEO of US-Softs</b>
                      </p>
                      <p className="lead">
                        Specializing in Mobile App Development for
                        Cross-Platforms using React-Native, Website Developer,
                        Animation Designer(3D) using Blender and Different Adobe
                        Tools and Business Management Expert. Adobe Illustrator
                        Expert and Web/Mob App Designer.
                      </p>
                      <p className="lead">
                        Freelancing on Upwork/Fiver and other online resources.I
                        have worked with many "High-Profile Clients" , local and
                        International including the following to illustrate
                        them.
                        <br />
                        <br />
                        <span>
                          &#8226; <b>KBR</b>(100 Million Estimated Revenue per
                          year)
                        </span>
                        <br />
                        <span>
                          &#8226; <b>M World</b> (Introduces the new digital
                          world, revenue still rising)
                        </span>
                        <br />
                        <span>
                          &#8226; <b>Pascaline Softs</b>(12 Million Estimated
                          Revenue per year)
                        </span>{" "}
                        <br />
                        and others...
                        <br />
                        Currently known as Co-Founder and CEO of US-Softs IT
                        Company working as Developer for more than 3 years,
                        Working as Animation Designer more than 2
                        years(Alhamdulillah) assuring 95% client satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
