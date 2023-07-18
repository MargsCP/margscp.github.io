import React from "react";
import titleImg from "../../images/mountain.jpeg";

export default function Introduction() {
  return (
    <div>
        <img
          id="title-img"
          src={titleImg}
          alt="Margie Clarke"
          width= "100%"
        ></img>
        <div className="centered h1 title">Clarke Physiotherapy</div>
        <div className="book-btn-holder centered"><button className="btn btn-secondary book-btn">BOOK NOW</button></div>
    </div>
  );
}
