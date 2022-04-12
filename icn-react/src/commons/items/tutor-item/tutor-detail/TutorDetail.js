import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import profile from 'commons/images/person-example.jpg';
import StarRate from '../../star-rating/StarRate';
import TutorIntro from '../tabs/TutorIntro';
import TutorReview from '../tabs/TutorReview';

import 'commons/scss/items/details/tutor-detail.scss';
import { Desktop, Mobile } from 'commons/mediaqueries/MediaQuery';

const TutorDetail = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const tutorArr = [
    { title: "Intro", content: <TutorIntro /> },
    { title: "Review", content: <TutorReview /> },
  ];

  const selectTabHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <>
      <Desktop>
        <div className='tutorDetail'>
          <div className='tutorDetailWrap'>
            <div className='breadcrumbs'>
              <Link to="/">
                <i className='bx bx-chevron-left'></i>
                <span>Back</span>
              </Link>
              <nav>
                <i className='bx bx-home-alt-2'></i>
                <span>Home</span>
                <i className='bx bx-chevron-right'></i>
                <span>Tutor name</span>
              </nav>
            </div>
    
            <article>
              <main>
                <section className='video'>
                  <iframe height="400" src="https://www.youtube.com/embed/sVPYIRF9RCQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </section>
    
                <ul className='tutorTap'>
                  {
                    tutorArr.map((content, index) => {
                      return(
                        <li 
                          className={currentTab === index ? "active" : ""}
                          key={index}
                          onClick={() => selectTabHandler(index)}
                        >
                          {content.title}
                        </li>
                      )
                    })
                  }
                </ul>
                
                <div className='tabContent'>
                  {tutorArr[currentTab].content}
                </div>
    
              </main>
    
              <aside>
                <div className='tutorInfoWrap'>
                  <figure>
                    <img src={profile} alt="profile sample" />
                  </figure>
      
                  <header>
                    Tutor: <strong>Sahara</strong>
                  </header>

                  <p>
                    Bachelor of Digital Marketing
                  </p>

                  <em>University of Pennsylvania</em>
      
                  <StarRate rate={4.8} rateNum={200} id={1}/>
                </div>
              </aside>
            </article>
          </div>
        </div> 
      </Desktop> 

      <Mobile>
        <div className='tutorDetail'>
          <div className='tutorDetailWrap'>
            <div className='breadcrumbs'>
              <nav>
                <i className='bx bx-home-alt-2'></i>
                <span>Home</span>
                <i className='bx bx-chevron-right'></i>
                <span>Tutor name</span>
              </nav>
            </div>
    
            <article>
              <main>
    
                <ul className='tutorTap'>
                  {
                    tutorArr.map((content, index) => {
                      return(
                        <li 
                          className={currentTab === index ? "active" : ""}
                          key={index}
                          onClick={() => selectTabHandler(index)}
                        >
                          {content.title}
                        </li>
                      )
                    })
                  }
                </ul>
                
                <div className='tabContent'>
                  {tutorArr[currentTab].content}
                </div>
    
              </main>
    
              <aside>
                <section className='video'>
                  <iframe height="400" src="https://www.youtube.com/embed/sVPYIRF9RCQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </section>

                <div className='tutorInfoWrap'>
                  <figure>
                    <img src={profile} alt="profile sample" />
                  </figure>
      
                  <header>
                    Tutor: <strong>Sahara</strong>
                  </header>
      
                  <p>
                    Bachelor of Digital Marketing
                  </p>
                  
                  <em>University of Pennsylvania</em>
      
                  <StarRate rate={4.8} rateNum={200} id={1}/>
                </div>
              </aside>
            </article>
          </div>
        </div> 
      </Mobile>
    </>
  )
}

export default TutorDetail