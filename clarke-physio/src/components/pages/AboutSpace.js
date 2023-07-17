import React from "react";
import "./styles.css";
import aboutMeImage from "../../images/stock-office.png";

export default function AboutSpace() {
  return (
    <div className="container">
      <h1 className="mt-2 text-center header">About the Space</h1>
      <hr className="horizontal-line text-center"></hr>
      <div className="row mt-5">
        <div className="col-lg-6 my-4">
          <img
            id="about-me-img"
            src={aboutMeImage}
            alt="Margie Clarke"
            height="340"
            width="370"
            className="mx-auto"
          ></img>
        </div>
        <div className="col-lg-6">
          <h4 className="mb-3">Margie Clarke</h4>
          <h6>
            Easy to access <i className="bi bi-dot"></i> Serene
             <i className="bi bi-dot"></i> Well equiped
          </h6>
          <p>
            Our space is beautiful and designed specifically with your wellness and comfort in mind
            <br></br>
            <br></br>
            Clarke Physiotherapy is located in the heart of Sea Point, Cape Town, within the contemporary setting of the new <p><a class="link-opacity-100" href="https://stationhouseseapoint.co.za/">Station House</a></p>. Our facility is thoughtfully designed to cater to your rehabilitation needs with a dedicated gym space for exercise and rehabilitation, while the practice rooms are situated on level 5, offering a tranquil and comfortable setting for your physiotherapy sessions. Working closely with our exceptional team of biokineticists (Link to Kevin Oliver), we provide comprehensive care and support for your well-being. 

Notes for coming to the space:
-Available paid underground parking (1 hour R15; 2 hours R25)
-Enter through the reception area on  ground floor reception with facial recognition technology,
-Practice rooms are on Level 5, while the gym space is Level 6
-Coffee shop on the ground floor

          </p>
        </div>
      </div>
    </div>
  );
}