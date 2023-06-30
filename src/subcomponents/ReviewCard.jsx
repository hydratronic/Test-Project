import React from "react";

const ReviewCard = (props) => {
      return(
            <div className={props.class}>
                  <div className="title">
                        <div className="lolla-1-parent">
                              <img className="lolla-1-icon" alt="" src="/lolla-1@2x.png" />
                              <div className="frame-group">
                                    <div className="frame-group">
                                          <b className="lolla-smith">Lolla Smith</b>
                                          <div className="microsoft">Microsoft</div>
                                    </div>
                                    <div className="fluent-emoji-flatstar-parent">
                                          <>⭐⭐⭐⭐⭐</>
                                    </div>
                              </div>
                        </div>
                        <div className="lorem-ipsum-is11">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make `}</div>
                  </div>
            </div>
      );
};

export default ReviewCard;