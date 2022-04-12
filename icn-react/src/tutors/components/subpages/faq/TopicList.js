import React from 'react'
import { Link } from 'react-router-dom'
import topics from './details/topics.json';

const TopicList = ({title}) => {
  return (
    <section className='topicList'>
      <div className='webWrap'>
        <h2 className="sectionTitle">{title}</h2>

        <article>
          {
            topics.map((topic) => {
              return(
                <div key={topic.id} className="topicItemWrap">
                  
                  <Link to={{
                      pathname:`/tutors/faq/${topic.topicName}`,
                      props: {topicName : topic.topicName}                     
                    }}>
                    {topic.topicName}
                  </Link>
                </div>
                )
              }
            )
          }
        </article>
      </div>
    </section>
  )
}

export default TopicList