import React from "react";
import { Link } from "react-router-dom";

export const Nav: React.FC = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-primary navbar-light">
        <div className="container ">
        
          <Link to="/" className="navbar-brand">
            MyLogo
          </Link>

          
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

         
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center ">
              <li className="nav-item">
                <Link to="/" className="nav-link border-top  mt-4">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link border-top">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link border-top">
                  Login
                </Link>
              </li>
             
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
