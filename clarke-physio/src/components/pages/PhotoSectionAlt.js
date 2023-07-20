import React from "react";

import gymImg from "../../images/gym.jpeg"

export default function PhotoSectionAlt() {
  return (
    <div className="container-fluid photo-bg p-5">
          <img src={gymImg} className="border border-black" width= "100%"></img>
    </div>
  );
}