import React from 'react'
import Dashboard from './Dashboard'

import Header from './Header'

const Base = (props) => {
  return (
    <>
    <Header/>
    <div className="container-fluid base  border border-success">
      <div className="row ">
        <div className="col-lg-2 ">
          <Dashboard/>
        </div>
        <div className="col-lg-10 pt-5 ">
          {props.children}
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default Base