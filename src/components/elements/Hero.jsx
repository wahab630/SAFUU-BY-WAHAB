import React from "react";
import {
  FaUser,
  FaExchangeAlt,
  FaCalculator,
  FaTh,
  FaRegFileAlt,
  FaRegMoon,
} from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="container-fluid hero">
        <div className="row">
          <div className="col-lg-2 col-12 first-col">
            <div>
              <img
                src="https://app.safuu.com/static/media/safuu-logo.ca35646e.png"
                className="sidebar-logo"
                alt="no"
              />
            </div>
            <div>
              <button className="btn side-btn">
                <FaTh size={20} /> <span className="me-3"></span> Dashboard
              </button>
              <button className="btn side-btn-two">
                <FaUser size={20} /> <span className="me-3"></span> Account
              </button>
              <button className="btn side-btn-two">
                <FaExchangeAlt size={20} />
                <span className="me-3"></span> Swap
              </button>
              <button className="btn side-btn-two">
                <FaCalculator size={20} />
                <span className="me-3"></span> Calculator
              </button>
              <button className="btn side-btn-two">
                <FaRegMoon size={20} />
                <span className="me-3"></span> Analytics
              </button>
              <button className="btn side-btn-two">
                <FaRegFileAlt size={20} /> <span className="me-3"></span>Docs
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-12 second-col mt-5">
            <div className="card text-center ">
              <div className="card-body">
                <h5 className="text-white">Market Value of Treasury Asset</h5>
                <h5 className="s-text">$58,770,415</h5>
              </div>
            </div>
            <div className="card text-center mt-4 other-card">
              <div className="card-body">
                <h5 className="text-white">Total Supply</h5>
                <h5 className="s-text">61,634,066.59</h5>
              </div>
            </div>
            <div className="card text-center mt-4 other-card">
              <div className="card-body">
                <h5 className="text-white">Circulating Supply</h5>
                <h5 className="s-text">45,339,537.92</h5>
              </div>
            </div>
            <div className="card text-center mt-4 other-card">
              <div className="card-body">
                <h5 className="text-white"># Value of FirePit</h5>
                <h5 className="s-text">16,294,528.67 SAFUU</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-12 first-col mt-5">
              
          <div className="card text-center mt-4 other-card">
              <div className="card-body">
                
                <button className="btn side-btn-two">
                
                SAFUU PRICE
              </button>
                <h5 className="s-text">$1.56</h5>
                <h5 className="text-white to-top">Rebasing</h5>
              </div>

             
            </div>
            <div className="card text-center mt-4 other-card">
              <div className="card-body">
                <h5 className="text-white"># Value of FirePit</h5>
                <h5 className="s-text">$25,531,805</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-12  mt-5">
            <div className="card text-center ">
              <div className="card-body">
                <h5 className="text-white">Market Value of Treasury Asset</h5>
                <h5 className="s-text">$58,770,415</h5>
              </div>
            </div>
            <div className="card text-center mt-4 other-card">
              <div className="card-body">
                <h5 className="text-white">Total Supply</h5>
                <h5 className="s-text">61,634,066.59</h5>
              </div>
            </div>
            <div className="card text-center mt-4 other-card">
              <div className="card-body">
                <h5 className="text-white">Circulating Supply</h5>
                <h5 className="s-text">45,339,537.92</h5>
              </div>
            </div>
            <div className="card text-center mt-4 other-card">
              <div className="card-body">
                <h5 className="text-white"># Value of FirePit</h5>
                <h5 className="s-text">16,294,528.67 SAFUU</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
