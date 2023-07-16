import React from "react";
import "./AboutMe.css";
import aboutMeImage from "../../images/about-me-image.png";

export default function AboutMe() {
  return (
    <div className="container">
      <h1 className="mt-2 text-center about-me-title">about me</h1>
      <hr className="horizontal-line text-center"></hr>
      <div className="row mt-5">
        <div className="col-lg-6 my-4">
          <img
            id="about-me-img"
            src={aboutMeImage}
            alt="Margie Clarke"
            height="340"
            width="350"
            className="mx-auto"
          ></img>
        </div>
        <div className="col-lg-6">
          <h4 className="mb-3">Margie Clarke</h4>
          <h6>
            Practicing 10+ years <i className="bi bi-dot"></i> BSc Physiotherapy
            (UCT) <i className="bi bi-dot"></i> [Practice Number]
          </h6>
          <p>
            Once you get to know Margie you'll realise that her commitment to
            helping her patients through their injury management and
            rehabilitation, is what truly sets her apart.
            <br></br>
            <br></br>
            Margie graduated from UCT with honours in Physiotherapy. She
            completed her community service in Port Elizabeth's tertiary
            hospitals but once she experienced all the potholes in PE, she made
            her way back to her favourite city: Cape Town. Since then she has
            worked in private practice including hospital and outpatient work.
            She is a brilliant problem solver and is determined to help her
            clients achieve their goals. She has a real client-centred approach
            and Patients love and trust her.
          </p>
        </div>
      </div>
    </div>
  );
}
