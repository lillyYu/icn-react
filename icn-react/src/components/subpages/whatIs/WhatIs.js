import { Desktop } from "commons/mediaqueries/MediaQuery"
import { Link } from "react-router-dom"
import "components/scss/subpages/subpages.scss"
import banner from 'commons/images/sub-banner1.jpg'

import OurService from "./OurService";
import StudentReviews from "./StudentReviews";

export const WhatIs =() => {
  

  return(
    <Desktop>
      <div className="subpageStyling whatIs">
        <main className="subMain">
          <div>
            <p>Welcome to ICN</p>
            <header>
              You can join with ICN<br/>
              and upgrade your skill for<br/>
              your <mark>bright future.</mark>
            </header>
            <Link to="/" className="blueButton">Class register now!</Link>
          </div>
          <figure>
            <img src={banner} alt="person typing"/>
          </figure>
        </main>

        <OurService title="Our Service" />

        <StudentReviews title="Student Reviews"/>

      </div>
    </Desktop>
    
  )
}