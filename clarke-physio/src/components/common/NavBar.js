import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark px-3">
      <a className="navbar-brand text-light" href="#">
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
        <ul className="navbar-nav mr-auto">
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
            <Link className="nav-link text-light" to="/services">Services</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link text-light" to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item active">
            <SocialIcon url="https://www.linkedin.com/in/margie-witz-clarke-507b7084/"></SocialIcon>
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
    </nav>
  );
}
