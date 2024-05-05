/** @format */

import React from "react";
import "./index.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-dark p-4">
        <div className="container-fluid">
          <a className="navbar-brand text-light fs-3 fw-bold">Shopping Cart</a>
          <button
            className="navbar-toggler btn btn-light text-light"
            aria-controls="#collapsedpositive"
            aria-expanded="false"
            data-bs-toggle="collapse"
            data-bs-target="#collapsedpositive"
            aria-labelledby="Toggle navigation">
            <span className="navbar-toogler-icon text-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsedpositive">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-primary fs-4">Jeane</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary fs-4">TShirts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
