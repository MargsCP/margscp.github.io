
import React from "react";

import gymImg from "../../images/gym.jpeg"

export default function PhotoSection() {
  return (
    <div className="container-fluid photo-bg p-5">
          <img src={gymImg} className="border border-black photo" width= "100%" alt="Gym"></img>
    </div>
  );
}