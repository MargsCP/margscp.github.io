import React from "react";
import { InlineWidget } from "react-calendly";
import { SocialIcon } from "react-social-icons";

export default function HomePage() {
  return (
    <div className="container-fluid bg-light ">
      <div className="card mt-4 mb-5">
        <div className="card-body text-center p-3 text-center">Hello</div>
      </div>
      <div className="row mb-5">
        <div className="col col-6 mt-2 border pt-3 ">
          <InlineWidget url="https://calendly.com/carson-brantley"></InlineWidget>
        </div>

        <div className="col col-6 mt-2 border-top border-end border-bottom pt-3 text-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.853810016068!2d18.3871124!3d-33.9191619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc67223a3a0967%3A0xb0e5e905989aa540!2s19%20Kloof%20Rd!5e0!3m2!1sen!2sza!4v1689165708794!5m2!1sen!2sza"
            width="90%"
            height="90%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
