import React from "react";
import {
  FaUndoAlt,
  FaRegSun,
  FaAngleDown,
  FaBiohazard,
  FaArrowDown,
} from "react-icons/fa";

const Swap = () => {
  return (
    <>
      <div className="swap">
        <div className="container">
          <div className="row justify-centent-center">
            <div className="col-lg-5  swap-center">
              <div className="card mobile-card">
                <div className="card-body">
                  <div className="mobile-header mb-3">
                    <div className="main-header">
                      <h2 className=" mobile-h2">SWAP</h2>
                      <div>
                        <span className="text-white">
                          <FaUndoAlt />
                        </span>
                        <span className="text-white">
                          {" "}
                          <FaRegSun />
                        </span>
                      </div>
                    </div>
                    <div class="sub-header">Fast, Secure, KYC-Free.</div>
                  </div>
                  <div className="mobile-input">
                    <div className="m-input-first ">
                      <p className="m-input-t ">
                        <div> From:</div>{" "}
                        <div>
                          <span class="sub-header">Balance: 0</span>
                        </div>{" "}
                      </p>
                      <p className="m-input-t ">
                      <input type="text" value="0.00" />
                        <div>
                          {" "}
                          <small className="me-2 green-text">Max</small>
                          <span>
                            <FaBiohazard />
                          </span>{" "}
                          <span class="sub-header">BNB</span>
                          <span>
                            <FaAngleDown />{" "}
                          </span>
                        </div>
                      </p>
                    </div>
                  </div>
                  <div className="arrow my-3">
                    <div>
                      <FaArrowDown />
                    </div>
                  </div>
                  <div className="mobile-input">
                    <div className="m-input-first ">
                      <p className="m-input-t ">
                        <div> To:</div>
                        <div>
                        
                          <span class="sub-header">Balance: 0</span>
                        </div>{" "}
                      </p>
                      <p className="m-input-t ">
                        <input type="text" value="0.00" />
                        <div>
                          <span>
                            <img
                              className="input-img"
                              src="https://app.safuu.com/static/media/safuu-logo.ca35646e.png"
                              alt=""
                            />
                          </span>
                          <span class="sub-header ms-2">SAFUU</span>
                          <span>
                            <FaAngleDown />{" "}
                          </span>
                        </div>
                      </p>
                    </div>
                  </div>
                  <div className="mobile-para my-2">
                    <div>
                      <small className="gray-text">Slippage Tolerance</small>
                    </div>
                    <div className="green-text fw-bolder">0.1%</div>
                  </div>
                  <button className="btn mobile-btn mb-2">
                    Connect Wallet
                  </button>
                  <div className="mobile-input">
                    <div className="m-input-first ">
                      <p className="m-input-t ">
                      <span class="sub-header">Minimum received</span>
                        <div>
                          <span class="sub-header">0 SAFUU</span>
                        </div>
                      </p>
                      <p className="m-input-t ">
                      <span class="sub-header">Price Impact
</span>
                        <div>
                          <span class="sub-header">0%</span>
                        </div>
                      </p>
                      <p className="m-input-t ">
                      <span class="sub-header">Liquidity Provider Fee
</span>
                        <div>
                          <span class="sub-header">0 SAFUU</span>
                        </div>
                      </p>
                      <p className="m-input-t ">
                      <span class="sub-header">Minimum received</span>
                        <div>
                          <span class="sub-header">SAFUU BNB</span>
                        </div>
                      </p>
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

export default Swap;
