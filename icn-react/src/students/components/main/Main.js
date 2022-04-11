import { Desktop, Mobile } from "commons/mediaqueries/MediaQuery"
import mainBanner from 'commons/images/main-banner.png';
import { Link } from 'react-router-dom';

import '../scss/main/main.scss';
import '../scss/main/sections.scss';
import { NewContents } from "./NewContents";
import { ThisMonthTutor } from "./ThisMonthTutor";
import { ImproveSkill } from "./ImproveSkill";
import { RecommendTutors } from "./RecommendTutors";
import { NewTutors } from "./NewTutors";

export const Main = () => {
  return(
    <>
      <Desktop>
        <div className="icnMain">
          <main className='mainBanner'>
            <div className="mainBannerWrap">
              <div className='mainBannerLeft'>
                <div className='bannerText'>
                  <header>Find Your Best <br /><mark>Online Class</mark></header>
                  <p>
                    The best and lagest online tutoring application in Korea.<br />
                    The most complete online learning solution
                  </p>
                </div>
      
                <Link to="/sign-up" className="blueButton">Class register now!</Link>
              </div>
              
              <figure>
                <img src={mainBanner} alt="메인 배너 테스트"/>
              </figure>
            </div>
          </main>
  
          {/* Section 1 */}
          <NewContents sectionTitle="New Contents"/>
  
          {/* Section 2 */}
          <ThisMonthTutor sectionTitle="This Month's Tutors" />

          {/* Section 3 */}
          <ImproveSkill />

          {/* Section 4 */}
          <RecommendTutors sectionTitle="Recommend Tutors"/>

          {/* Section 5 */}
          <NewTutors sectionTitle="New Tutors"/>
        </div>
      </Desktop>

      <Mobile>
        <div className="icnMain">
          <main className='mainBanner'>
            <div className="mainBannerWrap">
              <div className='mainBannerLeft'>
                <div className='bannerText'>
                  <header>Find Your Best <br /><mark>Online Class</mark></header>
                  <p>
                    The best and lagest online tutoring application in Korea.<br />
                    The most complete online learning solution
                  </p>
                </div>
      
                <Link to="/sign-up" className="blueButton">Class register now!</Link>
              </div>
              
              <figure>
                <img src={mainBanner} alt="메인 배너 테스트"/>
              </figure>
            </div>
          </main>

          {/* Section 1 */}
          <NewContents sectionTitle="New Contents"/>

          {/* Section 2 */}
          <ThisMonthTutor sectionTitle="This Month's Tutors" />

          {/* Section 3 */}
          <ImproveSkill />

          {/* Section 4 */}
          <RecommendTutors sectionTitle="Recommend Tutors"/>

          {/* Section 5 */}
          <NewTutors sectionTitle="New Tutors"/>
        </div>
      </Mobile>
    </>
  )
}