import React from "react";
import { InlineWidget } from "react-calendly";
import "./styles.css";

export default function Booking() {

  /*
  This is the booking and contact info section that includes a Calendly widget and basic contact info
  The Calendly widget requires minimal styling, only parameter is the URL which could be changed if you wish to offer other bookings
  Same goes for email and whatsapp, should they change for any reason it should be updated
  Whatsapp should also be updated in the NavBar

  */


  return (
    <div className="container-fluid booking-bg" id="booking">
      <h1 className="pt-5 text-center header">Contact Us</h1>
      <hr className="horizontal-line text-center mb-10"></hr>
      <div className="row pb-4 px-3">
        <div className="col-lg-6 mt-2 pt-3 text-center">
          <h2>Book an Appointment</h2>
          <InlineWidget url="https://calendly.com/clarkephysiotherapy/60min"></InlineWidget>
        </div>

        <div className="col-lg-6 mt-2 pt-3 text-center">
          <h2>Find Us on 19 Kloof Road, Sea Point</h2>
          <div className="border border-white p-4 text-start">
            <h3 className="pb-3">Office Hours</h3>
            <div>
              Monday to Friday <br></br>
              9:00 am to 6:00 pm<br></br>
              <br></br>
              Saturday<br></br>
              9:00 am to 12:00 noon<br></br>
              <br></br>
              Home visits available upon request (area dependent)<br/><br/>
              Find us at Station House, 19 Kloof Road, Sea Point<br/>
              Cape Town, 8005<br/><br/>
              Or contact us online:<br/>
              Email: <a href = "mailto: margie@clarkephysiotherapy.co.za" className="email-color">margie@clarkephysiotherapy.co.za</a><br/>
              Whatsapp (text only): <a href="https://api.whatsapp.com/send/?phone=27687881888" className="email-color" target="_blank"> +27 687881888</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}