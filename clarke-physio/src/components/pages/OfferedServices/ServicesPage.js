import React from "react";
import { servicesArray } from "../../../models/Service";
import InteractiveCard from "./InteractiveCard";
import "../styles.css";

export default function ServicesPage() {
  return (
    <div className="py-5 services-bg" id="services">
      <h1 className="text-center header">
    // <div style={{backgroundImage: "linear-gradient(180deg, rgb(238, 235, 229), rgb(167, 154, 139))"}}>
        Our Services
      </h1>
      <hr className="horizontal-line text-center mb-5" style={{color: "#623E29", width: "50%", borderRadius: 4}} ></hr>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 20,
        }}
        >
        {servicesArray.map((service) => {
          return <InteractiveCard service={service} />;
        })}
      </div>
    </div>
        // </div>
  );
}
