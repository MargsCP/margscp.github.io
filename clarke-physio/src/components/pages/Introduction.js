import React from "react";
import titleImg from "../../images/mountain.jpeg";

export default function Introduction() {
  return (
    <div className="container-fluid text-center">
      <div className="container-fluid position-relative" >
        <img
          id="title-img"
          src={titleImg}
          alt="Margie Clarke"
          width= "100%"
          className=" object-fit-cover"
        ></img>
        <div className="centered h1 title">Clarke Physiotherapy</div>
      </div>
    </div>
  );
}
