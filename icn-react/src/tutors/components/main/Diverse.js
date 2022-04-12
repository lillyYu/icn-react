import React from 'react'

import brandLogo1 from 'commons/images/tutors/brand-logo/brand-logo1.png';
import brandLogo2 from 'commons/images/tutors/brand-logo/brand-logo2.png';
import brandLogo3 from 'commons/images/tutors/brand-logo/brand-logo3.png';
import brandLogo4 from 'commons/images/tutors/brand-logo/brand-logo4.png';
import brandLogo5 from 'commons/images/tutors/brand-logo/brand-logo5.png';
import brandLogo6 from 'commons/images/tutors/brand-logo/brand-logo6.png';
import brandLogo7 from 'commons/images/tutors/brand-logo/brand-logo7.png';
import brandLogo8 from 'commons/images/tutors/brand-logo/brand-logo8.png';
import brandLogo9 from 'commons/images/tutors/brand-logo/brand-logo9.png';
import brandLogo10 from 'commons/images/tutors/brand-logo/brand-logo10.png';
import brandLogo11 from 'commons/images/tutors/brand-logo/brand-logo11.png';
import brandLogo12 from 'commons/images/tutors/brand-logo/brand-logo12.png';



const Diverse = () => {
  const brandLogos = [brandLogo1, brandLogo2, brandLogo3, brandLogo4, brandLogo5, brandLogo6, brandLogo7, brandLogo8, brandLogo9, brandLogo10, brandLogo11, brandLogo12]
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
          {
            brandLogos.map((brandLogo) => {
              return <img src={brandLogo} alt="" />
            })
          }
        </article>
      </div>
    </section>
  )
}

export default Diverse