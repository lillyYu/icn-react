import React from 'react'
import historyImage from 'commons/images/our-history-main.jpg';
import { Link } from 'react-router-dom';

const OurHistory = ({title}) => {
  return (
    <section className='ourHistory'>
      <div className='webWrap'>
        <h2 className="sectionTitle">{title}</h2>

        <article>
          <div className='ourHistoryLeft'>
            <h3>
              “We strive to break down linguistic barriers in industry and academia
              by making English language learning accessible to all.”
            </h3>
  
            <p>
              The shoes had been there for as long as anyone could remember. In fact, it was difficult for anyone to come up with a date they had first appeared. It had seemed they'd always been there and yet they seemed so out of place. Why nobody had removed them was a question that had been asked time and again, but while they all thought it, nobody had ever found the energy to actually do it. So, the shoes remained on the steps, out of place in one sense, but perfectly normal in another.
            </p>

            <Link to="">
              Read more 
              <span className="material-icons">navigate_next</span>
            </Link>
          </div>

          <figure>
            <img src={historyImage} alt="people sitting around desk"/>
          </figure>
        </article>
      </div>
    </section>
  )
}

export default OurHistory