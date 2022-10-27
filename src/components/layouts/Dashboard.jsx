import React from 'react'
import { Link } from "react-router-dom";
import {
    FaUser,
    FaExchangeAlt,
    FaCalculator,
    FaTh,
    FaRegFileAlt,
    FaRegMoon,
  } from "react-icons/fa";

const Dashboard = () => {
  return (
    <>
    <div className="dashboard ">
    <div className="container ">
        <div className="row">
        <div className="col  first-col">
            <div>
              <img
                src="https://app.safuu.com/static/media/safuu-logo.ca35646e.png"
                className="dashboard-logo"
                alt="no"
              />
            </div>
            <div>

            <Link to="/" className="">
              <button className="btn dashboard-btn">
                <FaTh size={20} /> <span className="me-3"></span> Dashboard
              </button>
              </Link>

              <Link to="/account" className="">
              <button className="btn other-btn">
                <FaUser size={20} /> <span className="me-3"></span> Account
              </button>
                </Link>

                <Link to="/swap" className="">
              <button className="btn other-btn">
                <FaExchangeAlt size={20} />
                <span className="me-3"></span> Swap
              </button>
              </Link>
              
              <Link to="/calculator" className="">
              <button className="btn other-btn">
                <FaCalculator size={20} />
                <span className="me-3"></span> Calculator
              </button>
              </Link>

              <Link to="/analytics" className="">
              <button className="btn other-btn">
                <FaRegMoon size={20} />
                <span className="me-3"></span> Analytics
              </button>
              </Link>

              <Link to="/docs" className="">
              <button className="btn other-btn">
                <FaRegFileAlt size={20} /> <span className="me-3"></span>Docs
              </button>
              </Link>
            </div>
          </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Dashboard