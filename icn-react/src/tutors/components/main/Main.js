import { Desktop } from 'commons/mediaqueries/MediaQuery'
import React from 'react'
import { Link } from 'react-router-dom'
import mainBanner from 'commons/images/tutors/main-banner.png';
import OwnHome from './OwnHome';
import 'tutors/components/scss/main/main.scss';
import Flexibility from './Flexibility';
import ThreeSteps from './ThreeSteps';
import RecommendReviews from 'students/components/subpages/reviews/RecommendReviews';
import Diverse from './Diverse';
const Main = () => {
  return (
    <Desktop>
        <div className="icnMain tutorMain">
          <main className='mainBanner'>
            <div className="mainBannerWrap">
              <div className='mainBannerLeft'>
                <div className='bannerText'>
                  <header>
                    TEACH &amp; EARN<br />
                    <mark>WITH ICN</mark>
                  </header>
                  <p>
                    The best and lagest online tutoring application in Korea.<br />
                    The most complete online learning solution
                  </p>
                </div>
      
                <Link to="/students/sign-up" className="blueButton">Class register now!</Link>
              </div>
              
              <figure>
                <img src={mainBanner} alt="메인 배너 테스트"/>
              </figure>
            </div>
          </main>
  
          {/* Section 1 */}
          <OwnHome />

          {/* Section 2 */}
          <Flexibility />

          {/* Section 3 */}
          <ThreeSteps />

          {/* Section 4 */}
          <Diverse />
          
          {/* Section 5 */}
          <RecommendReviews />


        </div>
      </Desktop>
  )
}

export default Main