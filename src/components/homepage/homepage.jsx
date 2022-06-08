import React from 'react'
import { Link } from 'react-router-dom'

export const Homepage=()=> {
  return (
      <>
      <div>homepage</div>
    <Link to={"/register"}><p>Register</p></Link>
      </>
    
  )
}
