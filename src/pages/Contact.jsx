import React from 'react';
import ContactForm from './ContactForm';


const Contact = () => {
    return (
        <>
         <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: "url(assets/img/overlay-bg.jpg)"}}>
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        Send Message Us
                      </h5>
                    </div>
                    <div>
                    <ContactForm/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">
                        Get in Touch
                      </h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                       US-Softs is a dedicated resource of business professionals, who have pooled their acknowledged experience & expertise in business consulting & enterprise solutions, for utmost satisfaction of our clients.
                      {/* <Map
                       google={this.props.google}
                        zoom={8}
                        style={mapStyles}
                        initialCenter={{ lat:31.545817, lng: 74.423543}}
                      /> */}
                       {/* <Marker position={{ lat: 31.54864039831413, lng: 74.40569802585637}} /> */}
                      </p>
                    </div>
                    <div className="list-ico">
                        <ul>
                          <li><span className="ion-ios-location"></span>Office#10, Alvi Grand Mall Zarrar Shaheed Road, Al-Faisal Town, Lahore Punjab Pakistan </li>
                          <li><span className="ion-ios-telephone"></span> (0310)4452269</li>
                          <li><span className="ion-email"></span> saribkhann84@gmail.com</li>
                        </ul>
                      </div>
                    <div className="socials">
                      <ul>
                        <li><a href="https://www.facebook.com/profile.php?id=100013900278751"><span className="ico-circle"><i className="ion-social-facebook"></i></span></a></li>
                        <li><a href="https://www.instagram.com/saribkhannn/"><span className="ico-circle"><i className="ion-social-instagram"></i></span></a></li>
                        {/* <li><a href=""><span className="ico-circle"><i className="ion-social-whatsapp"></i></span></a></li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>   
        </>
    )
}

export default Contact
