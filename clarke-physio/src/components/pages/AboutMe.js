import React from "react";

import aboutMeImage from "../../images/about-me-image.jpeg";

import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <div className="row about-me-row">

      {/* About Me Section Text */}
      <div className="col-lg-6 col-12">
        <div className="about-me-paragraph ms-5">
          {" "}
          <h1 className="text-black-50 greeting fst-italic">Hi, I'm Margie</h1>
          <div className="mt-5 about-me-summary fs-5 fw-medium">
            <p>
              I am the proud owner of Clarke Physiotherapy, with over a decade
              of experience and a passion for holistic healing.
              <br></br>
              <br></br>
              Here you can expect exceptional care, customised treatment plans,
              and a welcoming environment. Together, we'll embark on a healing
              journey that combines clinical expertise with your overall
              well-being.
            </p>
          </div>
          <Link to="/about">
            <div className="btn btn-light learn-more-btn fw-bold mt-5">
              LEARN MORE
            </div>
          </Link>
        </div>
      </div>

      {/* About Me Section Image */}
      <div className="col-lg-6 col-12 my-5">
        <img
          id="about-me-img"
          src={aboutMeImage}
          alt="Margie Clarke"
          height="600"
          width="450"
          className="mx-auto"
        ></img>
      </div>
    </div>
  );
}
