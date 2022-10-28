import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  FaUser,
  FaExchangeAlt,
  FaCalculator,
  FaTh,
  FaRegFileAlt,
  FaRegMoon,
} from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { FaTwitterSquare, FaDiscord, FaTelegramPlane } from "react-icons/fa";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="topbar sticky-top">
        <div className="container-fluid px-sm-4 px-none">
          <div className="row">
            <div className="col">
              <div className="header-full">
              <button  className="btn canvas-btn text-white d-block d-sm-none"
                      onClick={handleShow} >
                     <FaAlignJustify size={25} />
                   </button>
                <div className="header-left">
                  
                  <button className="btn header-btn d-none d-sm-block">
                    SAFUU
                  </button>
                </div>
                
                <div className="header-right">
                  <div className="header-icons me-5 d-none d-sm-block">
                    <span className="me-2">
                      <FaTwitterSquare color="white" size={30} />
                    </span>
                    <span className="me-2">
                      <FaTelegramPlane color="white" size={30} />
                    </span>
                    <span className="me-2">
                      <FaDiscord color="white" size={30} />
                    </span>
                    <span className="me-2">
                      <FaTwitterSquare color="white" size={30} />{" "}
                    </span>
                  </div>
                  
                  <div className="header-right-btn">
                    <button className="btn h-second-btn ">SAFUU</button>
                    <button className="head-last-btn">Connect Wallet </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Offcanvas className="canvas" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="canvas-body">
          <div>
            <img
              src="https://app.safuu.com/static/media/safuu-logo.ca35646e.png"
              width="140px"
              className="d-block m-auto"
              alt="no"
            />
          </div>
          <div className="d-flex flex-column">
            <Link to="/" className="">
              <button className="btn dashboard-btn ">
                <FaTh size={20} /> <span className="me-3"></span> Dashboard
              </button>
            </Link>

            <Link to="/account" className="">
              <button className="btn other-btn ">
                <FaUser size={20} /> <span className="me-3"></span> Account
              </button>
            </Link>

            <Link to="/swap" className="">
              <button className="btn other-btn ">
                <FaExchangeAlt size={20} />
                <span className="me-3"></span> Swap
              </button>
            </Link>

            <Link to="/calculator" className="">
              <button className="btn other-btn ">
                <FaCalculator size={20} />
                <span className="me-3"></span> Calculator
              </button>
            </Link>

            <Link to="/analytics" className="">
              <button className="btn other-btn ">
                <FaRegMoon size={20} />
                <span className="me-3"></span> Analytics
              </button>
            </Link>

            <Link to="/docs" className="">
              <button className="btn other-btn ">
                <FaRegFileAlt size={20} /> <span className="me-3"></span>
                Docs
              </button>
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
