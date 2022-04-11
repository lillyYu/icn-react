import { Desktop, Mobile } from "commons/mediaqueries/MediaQuery"

import logoImg from 'commons/images/logo.svg';
import { Nav } from "./Nav";
import { Signs } from "./Signs";

import { Link } from "react-router-dom";
import { useState } from "react";

import 'commons/scss/header/header.scss'

export const Header = () => {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburgerCick = () => {
    setHamburger(!hamburger)
  }

  return(
    <>
      <Desktop>
        <header className="webHeader">
          <div className="webHeaderWrap">
            <div className="headerLeft">
              <Link to="/students" className="active">
                <img src={logoImg} alt="ICN 로고 이미지"/>
              </Link>
    
              <Nav />
            </div>
            <Signs />
          </div>
        </header>
      </Desktop>

      <Mobile>
        <header className="mobileHeader">
          <Link to="/students" className="active">
            <img src={logoImg} alt="ICN 로고 이미지"/>
          </Link>
  
          <div className="mobileHeaderRight">
            <Link to="/students/sign-up">Sign up</Link>
  
            <div className={hamburger ? "hamburger active" : "hamburger"} onClick={handleHamburgerCick}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </header>
        <div className={hamburger ? "navWrap active" : "navWrap"}>
          <Nav />
        </div>
      </Mobile>
    </>
  )
}