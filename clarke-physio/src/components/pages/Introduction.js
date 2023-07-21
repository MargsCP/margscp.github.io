import React from "react";
import titleImg from "../../images/mountain.jpeg";
import "./styles.css";

export default function Introduction() {
  return (
    // Code for Header Image of Page
    <div className="title-container">
      <img id="title-img" src={titleImg} alt="Margie Clarke" width="100%"></img>
      <div className="title-holder row">
        <div className="title text-center mb-4">Clarke Physiotherapy</div>
      </div>
      <div className="subtitle-holder row">
        <div className="subtitle text-center">Sea Point, Cape Town</div>
      </div>
      <div className="book-btn-holder">
        <a href="#booking">
          <button className="btn btn-light book-btn fw-medium">
            BOOK APPOINTMENT
          </button>
        </a>
      </div>

    </div>
  );
}
