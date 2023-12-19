import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript
import "./Navbar.css";
import React from 'react';

function Navbar() {
  // Function to handle navigation
  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top bg-transparent">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav  mr-auto nav nav-underline gradient-underline">
              <li className="nav-item active">
                <button className="nav-link" onClick={() => navigateTo('/Home')}>
                  HOME
                </button>
              </li>
              <li className="nav-item active">
                <button className="nav-link" onClick={() => navigateTo('/About')}>
                  ABOUT
                </button>
              </li>
              <li className="nav-item active">
                <button className="nav-link" onClick={() => navigateTo('/Skills')}>
                  SKILLS
                </button>
              </li>
              <li className="nav-item active">
                <button className="nav-link" onClick={() => navigateTo('/Highlights')}>
                  HIGHLIGHTS
                </button>
              </li>
              <li className="nav-item active">
                <button className="nav-link" onClick={() => navigateTo('/Portfolio')}>
                  PORTFOLIO
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
