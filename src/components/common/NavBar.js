import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

export default function NavBar() {

  /* 
   Currently the Navbar is lacking the logo and instagram links
   The logo would most likely be added as an image in place of the current text
   The instagram link is currently commented out, once account is created add the URL link in place of the Google.com URL
   You may also want to change the LinkedIn URL to be the business accound instead of personal account once that is up and running
  */



  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark px-3 position-sticky fixed-top">
      <div className="container-fluid">
        {/* Logo would be inserted below */}
        <a className="navbar-brand text-light ms-auto" href="/#">
          Clarke Physiotherapy
        </a>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <Link className="nav-link text-light " to="/">
                Home
              </Link>
            </li>
            <li className=" nav-item active ">
              <Link className="nav-link text-light" to="/about">
                About
              </Link>
            </li>
            <li className=" nav-item active ">
              <a className="nav-link text-light" href="/#services">
                Services
              </a>
            </li>
            <li className=" nav-item active ">
              <a className="nav-link text-light" href="/#booking">
                Contact Us
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">

            {/* Contact info icons; instagram is commented out, could also add a link to Google Reviews here */}
            <li className="nav-item active me-auto">
              <a href="https://api.whatsapp.com/send/?phone=27724880406" target="_blank" rel="noreferrer">
                <i className="bi bi-whatsapp fa-2x mx-2" style={{fontSize: "1em", color: "white"}}>
                </i>
              </a>
              {/* <a href="https://google.com" target="_blank">
                <i className="bi bi-instagram fa-2x mx-2" style={{fontSize: "1em", color: "white"}}>
                </i>
              </a> */}
              <a href="https://www.linkedin.com/in/margie-witz-clarke-507b7084/" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin fa-2x mx-2 p-0 m-0" style={{fontSize: "1em", color: "white"}}>
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
