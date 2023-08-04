import React from "react";
import "./styles.css";
import aboutSpaceImage from "../../images/stock-office.png";



/*
Imports for images used in this fold 

NOTE: the "blank" image is there for the purpose of fitting the Google Maps embed, if the other images are replaced
and any new images of different dimensions are used, please change blank.jpeg to reflect the new aspect ratio.
*/


// import wallImg from "../../images/wall.jpeg";
import treatmentRoomImg from "../../images/space-2.jpeg";
import gymImg from "../../images/gym-3.jpeg";
import blankImg from "../../images/blank.jpeg";


export default function AboutSpace() {

  // This section is organized as a row with three columns, where each column has an image stacked on top of a card w/ text
  // To change images, please use above import statements
  // The Google Maps embed should not cause any issues so long as the "map", "posRelative", and "posAbsolute" classes in styles.css are not altered

  return (
    <div className="container-fluid aboutSpace-bg">
      <h1 className="pt-5 text-center header">The Space</h1>
      <hr className="horizontal-line text-center"></hr>

      {/* Below section is the row of the three images */}
      <div className="row mt-5 px-3 d-flex flex-row">
        {/* First Column */}
        <div className="col-lg-4 mb-5">
          <img
            className="border border-black"
            src={treatmentRoomImg}
            alt="Treatment Room"
            width="100%"
          ></img>
          <div className="border border-black p-3 mt-3">
            <div className="card-title text-center pb-2">Treatment Room</div>
            <div className="card-body infoBox">
              The practice rooms are situated on level 5, offering a tranquil
              and comfortable setting for your physiotherapy sessions. <br></br>
              <br></br>
              We also work closely with an exceptional team of biokineticists -
              Kevin Oliver and team.
            </div>
          </div>
        </div>
        {/* Second Column */}
        <div className="col-lg-4 mb-5">
          <img
            className="border border-black"
            src={gymImg}
            alt="Rehabilitation Space"
            width="100%"
          ></img>
          <div className="border border-black p-3 mt-3">
            <div className="card-title text-center pb-2">
              Rehabilitation Space
            </div>
            <div className="card-body infoBox">
              Our facility is thoughtfully designed to cater to your
              rehabilitation needs with a dedicated gym space for exercise and
              rehabilitation. <br></br>
              <br></br>
              You will find the gym on level 6 within the Station House.
            </div>
          </div>
        </div>
        {/* Third Column */}
        <div className="col-lg-4 mb-5">
          <div className="posRelative">
            <img
              className="border border-black"
              src={blankImg}
              alt="Rehabilitation Space"
              width="100%"
            ></img>
            <iframe
              title="Google Maps"
              className="border border-black map posAbsolute"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.853810016068!2d18.3871124!3d-33.9191619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc67223a3a0967%3A0xb0e5e905989aa540!2s19%20Kloof%20Rd!5e0!3m2!1sen!2sza!4v1689165708794!5m2!1sen!2sza"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="border border-black p-3 mt-3">
            <div className="card-title text-center pb-2 ">Location</div>
            <div className="card-body infoBox">
              Clarke Physiotherapy is located in the heart of Sea Point, Cape
              Town, within the contemporary setting of the new Station House.{" "}
              <br></br>
              <br></br><b>19 Kloof Rd, Sea Point<br></br>Cape Town, 8005</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}