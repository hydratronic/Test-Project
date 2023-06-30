import React from "react";

const Info = () => {
      return(
            <div className="vector-group">
                  <img className="vector-icon1" alt="" src="/vector1.svg" />
                  <b className="about">Free access to video class</b>
            </div>
      );
};

const Plan = (props) => {
      return(
                  <div className={props.class}>
                  <div className="basic-plan-parent">
                        <b className="about">{props.name} Plan</b>
                        <div className="lorem-ipsum-is7">
                              Lorem Ipsum is simply dummy text of the printing and
                              typesetting
                        </div>
                  </div>
                  <div className={props.colorType}>
                        <b className="about">$ 54</b>
                        <div className="month">/month</div>
                  </div>
                  <div className="frame-group">
                        <Info />
                        <Info />
                        <Info />
                  </div>
                  <div className={props.buttonType}>
                        <div className="start-free-trial">Start Free Trial</div>
                  </div>
            </div>
      );
};

export default Plan;