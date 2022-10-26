import React from 'react'

import Header from './Header'

const Base = (props) => {
  return (
    <>
    <Header/>
    {props.children}
    
    </>
  )
}

export default Base