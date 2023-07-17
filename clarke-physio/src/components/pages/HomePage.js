import React from "react";
import { InlineWidget } from "react-calendly";
import { SocialIcon } from "react-social-icons";
import AboutMe from "./AboutMe";
import Introduction from "./Introduction";
import Booking from "./Booking";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <>
      <div className="container-fluid wrapper">
        <Introduction></Introduction>
        <AboutMe></AboutMe>
        <Booking></Booking>
      </div>
    </>
  );
}
