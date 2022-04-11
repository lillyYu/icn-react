import React from 'react'

import brands from 'commons/images/tutors/main-brands.png';
const Diverse = () => {
  return (
    <section className="diverse">
      <div className='webWrap'>
        <h2 className="sectionTitle">
          <span>
            <strong>Diverse, motivated</strong> students
          </span>
          <p>
            Our students work in an incredibly broad range of industries and academic fields, from Big Data to Fine Art.
            They're hard-working, high-achieving and, most importantly, eager to learn.
          </p>
        </h2>
  
        <article>
          <img src={brands} alt="diverse brand icon" />
        </article>
      </div>
    </section>
  )
}

export default Diverse