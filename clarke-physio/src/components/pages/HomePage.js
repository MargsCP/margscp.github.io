import React from "react";
import AboutMe from "./AboutMe";
import Introduction from "./Introduction";
import Booking from "./Booking";
import AboutSpace from "./AboutSpace";
import ServicesPage from "./OfferedServices/ServicesPage";
import Testimonials from "./Testimonials";
import PhotoSectionAlt from "./PhotoSectionAlt";
import PhotoSection from "./PhotoSection";

export default function HomePage() {

  /* This section is fairly straightforward, just contains every fold on the home page
   There is an alternative photograph fold imported that has two photos instead of one 
   in case you wish to replace it or to add a second photo fold
  
  */

  return (
    <>
      <div className="wrapper">
        <Introduction/>
        <AboutMe/>
        <AboutSpace/>
        <PhotoSection/>
        <ServicesPage/>
        <Booking/>
        <Testimonials/>
      </div>
    </>
  );
}
