import React from 'react';
import CountUp from 'react-countup';

const workExp = () => {
return (
<div>
    
    <div className="section-counter paralax-mf bg-image" style={{backgroundImage: "url(assets/img/counters-bg.jpg)"}}>
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-lg-4">
            <div className="counter-box counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="ion-checkmark-round"></i></span>
              </div>
              <div className="counter-num">
                <p className="counter">
                    <CountUp start={0} end={50} duration={5}/>
                </p>
                <span className="counter-text">WORKS COMPLETED</span>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-lg-4">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="ion-ios-calendar-outline"></i></span>
              </div>
              <div className="counter-num">
                <p className="counter"> <CountUp start={0} end={3} duration={5}/></p>
                <span className="counter-text">YEARS OF EXPERIENCE</span>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-lg-4">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="ion-ios-people"></i></span>
              </div>
              <div className="counter-num">
                <p className="counter"> <CountUp start={0}end={43} duration={5}/></p>
                <span className="counter-text">TOTAL CLIENTS</span>
              </div>
            </div>
          </div>
          {/* <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="ion-ribbon-a"></i></span>
              </div>
              <div className="counter-num">
                <p className="counter">36</p>
                <span className="counter-text">AWARD WON</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
</div>
 )
}
export default workExp;