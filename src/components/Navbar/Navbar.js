import React from "react";
import logo from './Htech.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-white">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={logo} alt="Logo"/>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/my-quiz">
                  My Quizes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/play-quiz">
                 Play Quiz
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;