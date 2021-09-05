import React from 'react';

const Footer = () => {
    return (
      <>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                  <p className="copyright">
                    &copy; Copyright <strong>Bilal Shuja</strong>. All Rights
                    Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <a href="#" className="back-to-top">
          <i className="fa fa-chevron-up"></i>
        </a>
        <div id="preloader"></div>
      </>
    );
}

export default Footer
