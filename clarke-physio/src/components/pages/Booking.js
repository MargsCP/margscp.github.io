import React from "react";
import { InlineWidget } from "react-calendly";
import "./styles.css";

export default function Booking() {
  return (
    <div className="container">
      <h1 className="mt-2 text-center header">Place a Booking</h1>
      <hr className="horizontal-line text-center"></hr>
      <div className="card mt-4 mb-5">
        <div className="card-body text-center p-3 text-center">
          Home Page placeholder (ScreenWidth: {window.innerWidth})
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-lg-6 mt-2 border pt-3 ">
          <InlineWidget url="https://calendly.com/carson-brantley"></InlineWidget>
        </div>

        <div className="col-lg-6 mt-2 border-top border-end border-bottom pt-3 text-center">
            <iframe
              className="embed-responsive-item"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.853810016068!2d18.3871124!3d-33.9191619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc67223a3a0967%3A0xb0e5e905989aa540!2s19%20Kloof%20Rd!5e0!3m2!1sen!2sza!4v1689165708794!5m2!1sen!2sza"
              style={{ border: 0 }}
              height = "500px"
              min-width = "320px"
              width= "90%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </div>
    </div>
  );
}
