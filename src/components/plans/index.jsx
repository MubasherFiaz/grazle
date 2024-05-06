import React from "react";
import "./styles.css";
import calender from "../../assets/image/calender.png";
import grazle from "../../assets/image/grazleLogo.png";

const Plans = () => {
  return (
    <section id="premium-plans">
      <div className="container">
        <div className="plans-heading mb-4">
          <img src={grazle} />
          <h2 className="text-center">buy grazle premium</h2>
        </div>
        <div className="row g-3 justify-content-center">
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="plans-card">
              <div className="plans-metas mb-3">
                <img src={calender} />
                <span>monthly</span>
                <p className="m-0">$166.00</p>
                <span>12% off</span>
              </div>
              <div className="plans-info">
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis reiciendis omnis quibusdam
                </p>
                <button className="btn plans-btn">continue plan</button>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="plans-card">
              <div className="plans-metas mb-3">
                <img src={calender} />
                <span>monthly</span>
                <p className="m-0">$166.00</p>
                <span>12% off</span>
              </div>
              <div className="plans-info">
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis reiciendis omnis quibusdam
                </p>
                <button className="btn plans-btn">continue plan</button>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="plans-card">
              <div className="plans-metas mb-3">
                <img src={calender} />
                <span>monthly</span>
                <p className="m-0">$166.00</p>
                <span>12% off</span>
              </div>
              <div className="plans-info">
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis reiciendis omnis quibusdam
                </p>
                <button className="btn plans-btn">continue plan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
