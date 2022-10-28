import React from 'react'

const Analytics = () => {
  return (
    <>
      <div className="analytics">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-12 col-12">
          <div className="card text-center mt-4 other-card">
              <div className="card-body">
                <h5 className="">Your Balance</h5>
                <h5 className="center-t  fw-bold">$0</h5>
                <h5 className="">0 SAFUU</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-12">
          <div className="card text-center mt-4 other-card ">
              <div className="card-body">
                <h5 >APY</h5>
                <h5 className="center-t  fw-bold">383,025.8%</h5>
                <h5 >Daily ROI 2.28%</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
          <div className="card text-center mt-4 other-card">
              <div className="card-body">
                <h5 >Next Rebase:</h5>
                <h5 className="center-t  fw-bold">00:07:28</h5>
                <h5 >Rebasing...</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
          <div className="card  other-card px-3">
              <div className="card-body">
               <div className='account-card-first-item  '>
                <p className='text-white account-p '>Current SAFUU Price</p>
                <h5 className="account-h fw-bold">$1.54</h5>
               </div>
               <div className='account-card-first-item mt-2 '>
                <p className='text-white account-p'>Next Reward Amount</p>
                <h5 className=" account-h  fw-bolder">0 SAFUU</h5>
               </div>
               <div className='account-card-first-item mt-2 '>
                <p className='text-white account-p'>Next Reward Amount USD</p>
                <h5 className=" account-h  fw-bolder">$0</h5>
               </div>
               <div className='account-card-first-item mt-2 '>
                <p className='text-white account-p'>Next Reward Yield</p>
                <h5 className=" account-h  fw-bolder">0.02355%</h5>
               </div>
               <div className='account-card-first-item mt-2 '>
                <p className='text-white account-p'>ROI(1-Day Rate) USD</p>
                <h5 className=" account-h  fw-bolder">$0</h5>
               </div>
               <div className='account-card-first-item mt-2 '>
                <p className='text-white account-p'>ROI(5-Day Rate)</p>
                <h5 className=" account-h  fw-bolder">11.96%</h5>
               </div>
               <div className='account-card-first-item mt-2 '>
                <p className='text-white account-p'>ROI(5-Day Rate) USD</p>
                <h5 className="account-h  fw-bolder">$0</h5>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Analytics