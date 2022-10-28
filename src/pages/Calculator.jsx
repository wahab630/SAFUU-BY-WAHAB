import React from "react";

const Calculator = () => {
  return (
    <>
      <div className="calculator">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 px-4 py-3 inner-calculator">
              <div className="card calculator-card">
                <div className="card-body">
                  <div className="cal-top">
                    <p className="text-white fw-bolder  mb-0">Calculator</p>
                    <small className="text-white fw-bolder">Estimate your returns</small>
                  </div>
                  <div className="top-cards">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-4">
                        <div className="card text-center ">
                      <div className="card-body">
                        <p className="cal-card-top mb-0">SAFUU Price</p>
                        <h4 className="text-white fw-bolder">$1.53</h4>
                      </div>
                    </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="card text-center">
                      <div className="card-body">
                        <p className="cal-card-top mb-0">Current APY</p>
                        <h4 className="text-white fw-bolder">383,025.8%</h4>
                      </div>
                    </div>
                        </div>
                        <div className="col-lg-4"> 
                        <div className="card text-center">
                      <div className="card-body">
                        <p className="cal-card-top mb-0">Your SAFUU Balance</p>
                        <h4 className="text-white fw-bolder">0 SAFUU</h4>
                      </div>
                    </div></div>
                      </div>
                    </div>
                    
                    
                   
                  </div>
                  <div className="calculator-inputs">
                    
                    <div className="first-in-cal">
                      <p className="text-white fw-bold mb-0">SAFUU Amount</p>
                      <div className="inner-input">
                      <input type="text" value="0.00" />
                        <div className="text-white">MAX</div>
                      </div>
                    </div>
                    <div className="first-in-cal">
                      <p className="text-white fw-bold mb-0">APY (%)</p>
                      <div className="inner-input">
                      <input type="text" value="383025.8" />
                        <div className="text-white">Current</div>
                      </div>
                    </div>
                  </div>
                  <div className="calculator-inputs mt-3">
                    <div className="first-in-cal">
                      <p className="text-white fw-bold mb-0">SAFUU price at purchase ($)</p>
                      <div className="inner-input">
                      <input type="text" value="0.00" />
                        <div className="text-white">Current</div>
                      </div>
                    </div>
                    <div className="first-in-cal">
                      <p className="text-white fw-bold mb-0">Future SAFUU market price ($)</p>
                      <div className="inner-input">
                      <input type="text" value="383025.8" />
                        <div className="text-white">Current</div>
                      </div>
                    </div>
                  </div>
                  <div className="ranges mt-4">
                    <div>
                    <p className="text-white fw-bold mb-0">30 days First Year : 0.02355% Per EPOCH</p>
                    <input type="range" className="form-range color" id="customRange1"></input>
                     </div>
                     <div>
                    <p className="text-white fw-bold mb-0">30 days First Year : 0.02355% Per EPOCH</p>
                    <input type="range" className="form-range" id="customRange1"></input>
                     </div>
                  </div>
                  <div className="below-cal mt-3">
                    <div className="d-flex justify-content-between">
                      <small className="text-white fw-bolder">Your initial investment</small>
                      <small className="text-white fw-bolder">$0</small>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <small className="text-white fw-bolder">Current wealth</small>
                      <small className="text-white fw-bolder">$0</small>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <small className="text-white fw-bolder">SAFUU rewards estimation</small>
                      <small className="text-white fw-bolder">0 SAFUU</small>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <small className="text-white fw-bolder">Potential return</small>
                      <small className="text-white fw-bolder">$0</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
