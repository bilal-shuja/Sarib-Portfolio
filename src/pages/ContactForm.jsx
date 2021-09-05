import React from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

function ContactForm() {
    const  sendEmail=(e)=> {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_48ckebp', e.target, 'user_RvJc8jGZHcvRhq2eLKKJf')
          .then((result) => {
            //   alert("Your Message has been successfully Delivered !");
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
            swal("Great","Your Message has been successfully Delivered!", "success");
          e.target.reset();
      }
    return (
        <div>
             <form  role="form" className="php-email-form" onSubmit={sendEmail}>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"  required/>
                              <div className="validate"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" required />
                              <div className="validate"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                              <div className="validate"></div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message" required></textarea>
                              <div className="validate"></div>
                            </div>
                          </div>
                          <div className="col-md-12 text-center">
                            <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                          </div>
                        </div>
             </form>
        </div>
    )
}

export default ContactForm
