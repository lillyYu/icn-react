import { Desktop, Mobile, Tablet } from "commons/mediaqueries/MediaQuery"
import mainBanner from 'commons/images/main-banner.png';
import { Link } from 'react-router-dom';

import './scss/main/main.scss';
import alertIcon from 'commons/images/alert-icon.svg';
import profileSample from 'commons/images/profile-sample.jpg';

export const Main = () => {
  return(
    <>
      <Desktop>
        <main className='webMainBanner'>
          <div className='mainBannerLeft'>
            <div className='bannerText'>
              <header>Find Your Best <br /><mark>Online</mark> Courses</header>
              <p>
                The best and lagest online tutoring application in Korea.
                The most complete online learning solution
              </p>
            </div>
  
            <Link to="/sign-up">Class Reservation</Link>
          </div>
          <figure>
            <img src={mainBanner} alt="메인 배너 테스트"/>
          </figure>
        </main>
      </Desktop>
  
      <Mobile>
        <main className="mobileMainBanner">
          <div className="mainLeft">
            <header>Hello Lilly</header>
            <p>
              It’s a good day to learn 
              something new.
            </p>
          </div>
          <div className="mainRight">
            <div className="alertIcon">
              <img src={alertIcon} alt="alert icon"/>
              <span className="alertOn"></span>
            </div>

            <figure>
              <img src={profileSample} alt="profile" />
            </figure>
          </div>
        </main>
      </Mobile>
    </>
  )
}