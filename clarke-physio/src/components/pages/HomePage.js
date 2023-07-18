import React from "react";
import { InlineWidget } from "react-calendly";
import { SocialIcon } from "react-social-icons";
import AboutMe from "./AboutMe";
import Introduction from "./Introduction";
import Booking from "./Booking";
import Footer from "./Footer";
import AboutSpace from "./AboutSpace";

export default function HomePage() {
  return (
    <>
      <div className="wrapper">
        <Introduction></Introduction>
        <AboutMe></AboutMe>
        <AboutSpace></AboutSpace>
        <Booking></Booking>
      </div>
    </>
  );
}
