import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark px-3 position-sticky fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand text-light ms-auto" href="#">
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
              <Link className="nav-link text-light" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link text-light" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link text-light" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link text-light" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
    
            <li className="nav-item active me-auto">
              <a href="https://www.linkedin.com/in/margie-witz-clarke-507b7084/" target="_blank">
                <i className="bi bi-linkedin fa-2x mx-2 p-0 m-0" style={{fontSize: "2em"}}>
                </i>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=17173710984" target="_blank">
                <i className="bi bi-whatsapp fa-2x mx-2" style={{fontSize: "2em", color: "green"}}>
                </i>
              </a>
              <SocialIcon
                className="mx-2"
                url="https://www.linkedin.com/in/margie-witz-clarke-507b7084/"
              ></SocialIcon>
              <SocialIcon url="https://api.whatsapp.com/send/?phone=17173710984"></SocialIcon>
            </li>
          </ul>

          {/* <form class="form-inline my-2 my-lg-0 ml-auto">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form> */}
        </div>
      </div>
    </nav>
  );
}
