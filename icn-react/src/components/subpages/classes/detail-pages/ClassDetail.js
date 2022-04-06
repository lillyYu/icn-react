import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import contents from 'components/items/content-item/contents.json'

import profile from 'commons/images/person-example.jpg';
import { ContentItem } from 'components/items/content-item/ContentItem';
import cardIcon from 'commons/images/buy-course-icon.svg';

import classIncludes1 from 'commons/images/class-includes-icon1.svg';
import classIncludes2 from 'commons/images/class-includes-icon2.svg';
import classIncludes3 from 'commons/images/class-includes-icon3.svg';
import classIncludes4 from 'commons/images/class-includes-icon4.svg';
import classIncludes5 from 'commons/images/class-includes-icon5.svg';

const ClassDetail = () => {
  const [saveOn, setSaveOn] = useState(false);

  const saveClickHandler = () => {
    setSaveOn(!saveOn)
  }
  return (
    <div className='classDetail'>
      <div className='classDetailWrap'>
        <div className='breadcrumbs'>
          <Link to="/">
            <i class='bx bx-chevron-left'></i>
            <span>Back</span>
          </Link>
          <nav>
            <i class='bx bx-home-alt-2'></i>
            <span>Class</span>
            <i class='bx bx-chevron-right'></i>
            <span>Class name</span>
          </nav>
        </div>

        <article>
          <main>
            <header>
              Programming with Python: Hand on for the beginners
            </header>

            <div className='tutorInfo'>
              <div className='profile'>
                <figure>
                  <img src={profile} alt="profile sample" />
                </figure>
                <p>
                  <span>Lucas Dotato</span>
                  <span>University of Pennsylvania</span>
                </p>
              </div>

              <button type='button' className={saveOn ? "active" : null} onClick={saveClickHandler}>
                <i class='bx bx-heart'></i>
                <span>Save</span>
              </button>
            </div>

            <section className='video'>
              <iframe height="400" src="https://www.youtube.com/embed/sVPYIRF9RCQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>

            <section className='overview'>
              <h2>Overview</h2>
              <ul>
                <li>
                  Is the global economy going into a recession or depression? What do you think? With so many ups and downs in the stock market and the economy, we will focus on ways and languages that are useful to talk about data specifically from the stock market and economy view
                </li>
              </ul>
            </section>

            <section className='moreClass'>
              <h2>More class by teacher</h2>

              <div>
              {
                contents.map((content, index) => {
                  return(
                    <Link to={`/class/${content.title}`}>
                      <div key={index} className="contentItemWrap">
                        <ContentItem
                          id={content.id}
                          thumbnail={content.thumbnail}
                          // tags={content.tags}
                          title={content.title}
                          profile={content.profile}
                          tutorName={content.tutorName}
                          university={content.university}
                        />
                      </div>
                    </Link>
                    )
                  }
                )
              }
              </div>

              <p><button>See more</button></p>
            </section>
          </main>

          <aside>
            <div className='purchase'>
              <strong>2 Credit</strong>
              <div className='price'>
                <del>4 credit</del>
                <span>-50%</span>
              </div>
  
              <button className='addToCart'>
                Add to cart
                <i class='bx bx-cart'></i>
              </button>
  
              <button className='buyCourse'>
                Select course
                <img src={cardIcon} alt="credit card icon" />
              </button>
            </div>

            <div className='classIncludes'>
              <h3>This class includes:</h3>
              <ul>
                <li>
                  <img src={classIncludes1} alt="play icon" />
                  <span>21 hours on-demand videos</span>
                </li>
                <li>
                  <img src={classIncludes2} alt="documnet icon" />
                  <span>10 articles</span>
                </li>
                <li>
                  <img src={classIncludes3} alt="folder icon" />
                  <span>3 dowloadable folders</span>
                </li>
                <li>
                  <img src={classIncludes4} alt="phone icon" />
                  <span>Available on mobile</span>
                </li>
                <li>
                  <img src={classIncludes5} alt="trophy icon" />
                  <span>Certificate of completion</span>
                </li>
              </ul>
            </div>
          </aside>
        </article>
      </div>
    </div>  
  )
}

export default ClassDetail