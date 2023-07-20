import React from "react";

import wallImg from "../../images/wall.jpeg";
import balanceImg from "../../images/balance-2.jpeg";

export default function PhotoSection() {
  return (
    <div className="container-fluid photo-bg p-5">
      <div className="row">
        <div className="col-xs-6 col-lg-4 py-2 ">
          <img src={balanceImg} className="psImg border border-black"></img>
        </div>
        <div className="col-xs-6 col-lg-8 py-2">
          <img src={wallImg}  className="psImg border border-black"></img>
        </div>
      </div>
    </div>
  );
}