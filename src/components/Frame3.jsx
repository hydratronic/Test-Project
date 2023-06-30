import React from "react";
import Content from "../subcomponents/Content";
import PodcastOutline from "../subcomponents/PodcastOutline";
import ComputerMic from "../subcomponents/ComputerMic";

const Frame3 = () => {
      return(
            <div className="content-parent">
                  <Content />
                  <img className="frame-child" alt="" src="/group-75.svg" />
                  <img className="everyone-is-smiling-listens-gr-icon" alt="" src="/everyoneissmilinglistensgrouppeoplebusinessconferencemodernclassroomdaytime-1@2x.png" />
                  <img className="group-business-workers-smiling-icon" alt="" src="/groupbusinessworkerssmilinghappyconfidentworkingtogetherwithsmilefaceapplaudingonethemoffice-1@2x.png" />
                  <ComputerMic />
                  <PodcastOutline />
            </div>
      );
};

export default Frame3;