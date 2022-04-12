import React from 'react'
import { Link } from 'react-router-dom'

const TopicList = ({title}) => {
  return (
    <section className='topicList'>
      <div className='webWrap'>
        <h2 className="sectionTitle">{title}</h2>

        <article>
          <Link to="">The Star-strike system</Link>
          <Link to="">Promotion Points  &amp; Level</Link>
          <Link to="">Compensation &amp; Payment</Link>
          <Link to="">Feedback Report</Link>
          <Link to="">Lessons</Link>
          <Link to="">Tech Issues</Link>
          <Link to="">New Tutor &amp; Tutoring Advice</Link>
          <Link to="">The Site &amp; Profile</Link>
          <Link to="">Addtional Opportunities</Link>
          <Link to="">Contact Us</Link>
        </article>
      </div>
    </section>
  )
}

export default TopicList