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

   The testimonials sections was commented out, once actual clients have provided some testimonials, uncomment it out and feel free to readjust the order of the fold on the website

   If any images appear to be stretched abnormally that we've missed, add in an "objectFit: cover" attribute to the image.
   Please see either the #title-img in styles.css or the first image in AboutPage.js file as reference

  
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
        {/* <Testimonials/> */}
      </div>
    </>
  );
}
