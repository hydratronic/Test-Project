import React from "react";

const CourseDetails = (props) => {
      return(
                  <div className={props.name}>
                        <b className="about">Interactive Features</b>
                        <div className="lorem-ipsum-is">
                              Lorem Ipsum is simply dummy text of the printing and typesetting
                              industry. Lorem Ipsum has been
                        </div>
                  </div>
      );
};

const Course = () => {
      return(
            <div className="course">
                  <CourseDetails name="course1"/>
                  <CourseDetails name="course2" />
                  <CourseDetails name="course11" />
                  <CourseDetails name="course12" />
            </div>
      );
};

export default Course;