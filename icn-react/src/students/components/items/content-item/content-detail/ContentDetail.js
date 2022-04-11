import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ContentItem } from 'students/components/items/content-item/ContentItem';
import contents from 'students/components/items/content-item/contents.json'
import ClassIncludes from './ClassIncludes';

import profile from 'commons/images/person-example.jpg';
import cardIcon from 'commons/images/buy-course-icon.svg';
import cardIconWhite from 'commons/images/buy-course-icon-white.svg';
import { Desktop, Mobile } from 'commons/mediaqueries/MediaQuery';

import 'students/components/scss/items/details/content-detail.scss';

const ContentDetail = () => {
  const [saveOn, setSaveOn] = useState(false);

  const saveClickHandler = () => {
    setSaveOn(!saveOn)
  }

  return (
    <>
      <Desktop>
        <div className='contentDetail'>
          <div className='contentDetailWrap'>
            <div className='breadcrumbs'>
              <Link to="/" className='mobileDisplayNone'>
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
                  <iframe src="https://www.youtube.com/embed/sVPYIRF9RCQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                        <div key={index} className="contentItemWrap">
                          <Link to={`/class/${content.title}`}>
                            <ContentItem
                              id={content.id}
                              thumbnail={content.thumbnail}
                              // tags={content.tags}
                              title={content.title}
                              profile={content.profile}
                              tutorName={content.tutorName}
                              university={content.university}
                            />
                          </Link>
                        </div>
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
    
                <ClassIncludes />
              </aside>
            </article>
          </div>
        </div>  
      </Desktop>
  
      <Mobile>
        <div className='contentDetail'>
          <div className='contentDetailWrap'>
            <div className='breadcrumbs'>
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

                <section className='video'>
                  <iframe src="https://www.youtube.com/embed/sVPYIRF9RCQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </section>
    
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

                <ClassIncludes />
    
                <section className='overview'>
                  <h2>Overview</h2>
                  <ul>
                    <li>
                      Is the global economy going into a recession or depression? What do you think? With so many ups and downs in the stock market and the economy, we will focus on ways and languages that are useful to talk about data specifically from the stock market and economy view
                    </li>
                  </ul>
                </section>
    
                <section className='moreClass'>
                  <h2>
                    More class by teacher
                    <Link to="/">
                      See all
                      <span className="material-icons">navigate_next</span>
                    </Link>
                  </h2>
    
                  <div>
                    {
                      contents.map((content, index) => {
                        return(
                          <div key={index} className="contentItemWrap">
                            <Link to={`/class/${content.title}`}>
                              <ContentItem
                                id={content.id}
                                thumbnail={content.thumbnail}
                                // tags={content.tags}
                                title={content.title}
                                profile={content.profile}
                                tutorName={content.tutorName}
                                university={content.university}
                              />
                            </Link>
                          </div>
                          )
                        }
                      )
                    }
                  </div>
                </section>
              </main>
            </article>

            <aside>
              <div className='purchase'>
                <div>
                  <strong>2 Credit</strong>
                  <div className='price'>
                    <del>4 credit</del>
                    <span>-50%</span>
                  </div>
                </div>
    
                <button className='buyCourse'>
                  Select course
                  <img src={cardIconWhite} alt="credit card icon" />
                </button>
              </div>
            </aside>
          </div>
        </div>  
      </Mobile>
    </>
  )
}

export default ContentDetail