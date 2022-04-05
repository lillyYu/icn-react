import React from 'react'
import student1 from 'commons/images/student-example1.jpg';

const RecommendReviews = ({title}) => {
  return (
    <section>
      <div className='webWrap'>
        <h2 className="sectionTitle">{title}</h2>
        
        <div className="recommendReviewWrap">
          <article>
            <figure>
              <img src={student1} alt="" />
            </figure>
  
            <div>
              <span>
                “Excellent progression of material”
              </span>
  
              <p>
                “Between games, many bowlers drifted to the alley’s pro shop to soak in the wisdom of Maurice “Mo” Pinel, a star ball designer for the sporting-goods giant AMF. Pinel had come to Cincinnati to promote his latest creation, the Sumo. The bowling ball had launched the year before, backed by a TV commercial featuring a ginormous Japanese wrestler bellyflopping down a lane, with the tagline “Flat out, more power than you’ve ever seen in a bowling center.”
              </p>
  
              <header>Michael Jonata</header>
              <em>Manila, Philippine</em>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default RecommendReviews