import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import profile from 'commons/images/person-example.jpg';
import StarRate from '../star-rating/StarRate';
import TutorIntro from './tabs/TutorIntro';
import TutorReview from './tabs/TutorReview';

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
    <div className='tutorDetail'>
      <div className='tutorDetailWrap'>
        <div className='breadcrumbs'>
          <Link to="/">
            <i class='bx bx-chevron-left'></i>
            <span>Back</span>
          </Link>
          <nav>
            <i class='bx bx-home-alt-2'></i>
            <span>Home</span>
            <i class='bx bx-chevron-right'></i>
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
  
              <em>University of Pennsylvania</em>
  
              <StarRate rate={4.8} rateNum={200} id={1}/>
            </div>
          </aside>
        </article>
      </div>
    </div>  
  )
}

export default TutorDetail