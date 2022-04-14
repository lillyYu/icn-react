import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from './Nav'
import logoImg from 'commons/images/logo.svg';
import Profile from './Profile';

const Header = () => {
  return (
    <>
      <header className="webHeader">
        <div className="webHeaderWrap">
          <div className="headerLeft">
            <Link to="/tutors/" className="active">
              <img src={logoImg} alt="ICN 로고 이미지"/>
            </Link>
  
            <Nav />
          </div>

          <Profile />
        </div>
      </header>
    </>
  )
}

export default Header