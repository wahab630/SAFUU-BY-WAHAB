import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container-fluid hero other-card ">
        <div className="container px-5 m-auto d-block ">
          <div className="row">
            <div className="col-lg-4  first-col mt-5 ">
              <div className="card text-center">
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
              <div className="card text-center mt-4 other-card ">
                <div className="card-body">
                  <h5 className="text-white">Circulating Supply</h5>
                  <h5 className="s-text">45,339,537.92</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4  second-col">
              <div className="card text-center mt-4 other-card">
                <div className="card-body">
                  <button className="btn hero-btn">SAFUU PRICE</button>
                  <h5 className="s-text">$1.56</h5>
                  <div className="card other-card circle-card">
                    <div className="card-body">
                             <span className="text-in-circle">00:02:06</span>
                    </div>
                  </div>
                  <h5 className="text-white to-top">Rebasing</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4  first-col mt-5 ">
              <div className="card text-center ">
                <div className="card-body">
                  <h5 className="text-white ">
                    Market Value of Treasury Asset
                  </h5>
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
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 ">
              <div className="card text-center mt-4 other-card">
                <div className="card-body">
                  <h5 className="text-white"># Value of FirePit</h5>
                  <h5 className="s-text">16,294,528.67 SAFUU</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="card text-center mt-4 other-card">
                <div className="card-body">
                  <h5 className="text-white"># Value of FirePit</h5>
                  <h5 className="s-text">$25,105,225</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="card text-center mt-4 other-card">
                <div className="card-body">
                  <h5 className="text-white">% FirePit : Supply</h5>
                  <h5 className="s-text">26.44%</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
