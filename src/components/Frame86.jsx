import React from "react";
import Dots from "../subcomponents/Dots"
import ReviewCard from "../subcomponents/ReviewCard";

const Frame82 = () => {
      return(
            <div className="review-from-customers-parent">
                  <b className="about">Review from customers</b>
                  <div className="lorem-ipsum-is10">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry
                  </div>
            </div>
      );
};

const Frame86 = () => {
      return(
            <div className="frame-parent2">
                  <Dots />
                  <div className="frame-parent3">
                        <Frame82 />
                        <div className="instance-parent">
                              <ReviewCard class="frame-wrapper"/>
                              <ReviewCard class="frame-wrapper1"/>
                              <ReviewCard class="frame-wrapper2"/>
                              <div className="pepicons-pencilarrow-right-wrapper">
                                    <img className="pepicons-pencilarrow-right" alt="" src="/pepiconspencilarrowright.svg" />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Frame86;