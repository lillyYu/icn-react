import { Desktop, Mobile, Tablet } from "commons/mediaqueries/MediaQuery"

import logoImg from 'commons/images/logo.svg';
import { Nav } from "./Nav";
import { Signs } from "./Signs";

import '../scss/header/header.scss';
import { Link } from "react-router-dom";

export const Header = (children) => {
  return(
    <>
      <Desktop>
        <header className="webHeader">
          <div className="webHeaderWrap">
            <Link to="/" className="active">
              <img src={logoImg} alt="ICN 로고 이미지"/>
            </Link>
  
            <Nav />
          </div>
          <Signs />
        </header>
      </Desktop>
    </>
  )
}