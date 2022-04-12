import { Desktop } from 'commons/mediaqueries/MediaQuery'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import 'commons/scss/items/details/topic-detail.scss';

const TopicDetail = () => {
  const { topicName } = useParams();

  const [currentTab, setCurrentTab] = useState(0);

  const faqTabs = [
    { 
      question: 'How can I turn on my notifications for lesson alerts?',
      answer: 'How can I turn on my notifications for lesson alerts? Answer'
    },
    {
      question : 'Can I return to teaching once my account has become dormant?',
      answer : 'Can I return to teaching once my account has become dormant? Answer'
    },
    {
      question : 'How can I update my personal information?',
      answer : 'How can I update my personal information? Answer'
    },
    {
      question : 'What information can students see on my profile?',
      answer : 'What information can students see on my profile? Answer'
    },
    {
      question : 'How can I tell students that I prefer a certain type of lessons?',
      answer : 'How can I tell students that I prefer a certain type of lessons? Answer'
    }
    
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <Desktop>
        <div className='topicDetail'>
          <div className='topicDetailWrap'>
            <div className='breadcrumbs'>
              <Link to="/tutors/faq" className='mobileDisplayNone'>
                <i className='bx bx-chevron-left'></i>
                <span>Back</span>
              </Link>
              <nav>
                <i className='bx bx-home-alt-2'></i>
                <span>FAQ</span>
                <i className='bx bx-chevron-right'></i>
                <span>{topicName}</span>
              </nav>
            </div>
    
            <article>
              <aside>
                <h1>{topicName}</h1>
                <ul className="tabButtons">
                  {faqTabs.map((faqTab, index)=>{
                    return (
                      <li
                        key={index}
                        className={currentTab === index ? "active" : ""}
                        onClick={()=> selectMenuHandler(index)}
                      >
                        {faqTab.question}
                      </li>
                    )
                  })}
                </ul>
              </aside>

              <main>
                <header>
                  {faqTabs[currentTab].question}
                </header>

                <time>2 days ago</time>

                <section>
                  <p>
                    {faqTabs[currentTab].answer}
                  </p>
                </section>
                
                <section className="relatedQuestions">
                  <h2>Related questions</h2>
                  <ul>
                  {faqTabs.map((faqTab, index)=>{
                    return (
                      <li
                        key={index}
                        className={currentTab === index ? "active" : ""}
                        onClick={()=> selectMenuHandler(index)}
                      >
                        {faqTab.question}
                      </li>
                      )
                    })}
                  </ul>
                </section>

                <section>
                  <h2>Have more question?</h2>
                  <Link to='/'>Submit a request</Link>
                </section>

              </main>
            </article>
          </div>
        </div>  
      </Desktop>
  )
}

export default TopicDetail