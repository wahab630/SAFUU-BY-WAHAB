import React from 'react'
import Dashboard from './Dashboard'

import Header from './Header'

const Base = (props) => {
  return (
    <>
    <Header/>
    <div className="container-fluid  border border-success">
      <div className="row ">
        <div className="col-md-2 ">
          <Dashboard/>
        </div>
        <div className="col-md-10 ">
          {props.children}
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default Base