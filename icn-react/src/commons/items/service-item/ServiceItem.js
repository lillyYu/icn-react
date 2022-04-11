import React from 'react'
import { Link } from 'react-router-dom'

const ServiceItem = ({ bg, icon, header, content, link }) => {
  return (
    <article>
      <figure className={bg}>
        <i className={`bx ${icon}`}></i>
      </figure>
      <header>{header}</header>
      <hr />
      <p>{content}</p>
      {
        link && <Link to="/students/sign-up" className='lineButton'>
          Join now
          <span className="material-icons">arrow_forward</span>
        </Link>
      }
    </article>
  )
}

export default ServiceItem