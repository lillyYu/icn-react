import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <>
      <Link to="/students" style={{display: "block", fontSize: "2rem"}}>Go to Students Page</Link>
      <Link to="/tutors" style={{display: "block", fontSize: "2rem"}}>Go to Tutors Page</Link>
    </>
  )
}

export default Links