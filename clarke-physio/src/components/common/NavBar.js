import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark px-3 position-sticky fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand text-light ms-auto" href="/#">
          Clarke Physiotherapy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
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
    
            <li className="nav-item active me-auto">
              <a href="https://api.whatsapp.com/send/?phone=27687881888" target="_blank">
                <i className="bi bi-whatsapp fa-2x mx-2" style={{fontSize: "1em", color: "white"}}>
                </i>
              </a>
              <a href="https://google.com" target="_blank">
                <i className="bi bi-instagram fa-2x mx-2" style={{fontSize: "1em", color: "white"}}>
                </i>
              </a>
              <a href="https://www.linkedin.com/in/margie-witz-clarke-507b7084/" target="_blank">
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
