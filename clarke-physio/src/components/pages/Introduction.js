import React from "react";
import titleImg from "../../images/mountain.jpeg";

export default function Introduction() {
  return (
    <div className="title-container">
      <img id="title-img" src={titleImg} alt="Margie Clarke" width="100%"></img>
      <div className="title-holder row">
        <div className="title text-center">Clarke Physiotherapy</div>
      </div>
      <div className="subtitle-holder row">Sea Point, Cape Town</div>
      <div className="book-btn-holder">
        <button className="btn btn-secondary book-btn">BOOK APPOINTMENT</button>
      </div>
    </div>
  );
}
