import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { FaTwitterSquare,FaDiscord,FaTelegramPlane } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <button className="btn header-btn">SAFFU</button>
          </Link>
          <button
            className="navbar-toggler"
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
               <div className="header-icons">
                <li className="me-2"> <FaTwitterSquare color="white" size={30}/> </li>
                <li className="me-2"><FaTelegramPlane color="white" size={30}/></li>
                <li className="me-2"><FaDiscord color="white" size={30}/></li>
                <li className="me-2"> <FaTwitterSquare color="white"size={30}/> </li>
               </div>
              </li>
              
              <li className="nav-item">
                <Link to="./signup" className="nav-link">
                  <button className="btn h-second-btn">SAFUU</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="./signup" className="nav-link">
                  <button className="head-last-btn">Connect Wallet </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
