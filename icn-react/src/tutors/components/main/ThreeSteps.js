import React from 'react'
import step1 from 'commons/images/tutors/main-step1.png';
import step2 from 'commons/images/tutors/main-step2.png';
import step3 from 'commons/images/tutors/main-step3.png';

const ThreeSteps = () => {
  return (
    <section className="threeSteps">
      <div className='webWrap'>
        <h2 className="sectionTitle">
          <span>
            Get started in <strong>3 steps</strong>
          </span>
        </h2>
  
        <article>
          <div className='threeStepsWrap'>
            <article>
              <figure>
                <img src={step1} alt="person looking into web" />
              </figure>
    
              <div>
                <header>Step 1. Sumbit an application</header>
                <p>
                  Frank knew there was a correct time and place to reveal his secret and this wasn't it. The issue was that the secret might be revealed despite his best attempt to keep it from coming out.
                </p>
              </div>
            </article>
            <hr className='divider right'/>
    
            <article>
              <div>
                <header>Step 2. Schedule a mock session</header>
                <p>
                Frank knew there was a correct time and place to reveal his secret and this wasn't it. The issue was that the secret might be revealed despite his best attempt to keep it from coming out.
                </p>
              </div>
    
              <figure>
                <img src={step2} alt="people in web" />
              </figure>
            </article>
    
            <hr className='divider left'/>
            <article>
              <figure>
                <img src={step3} alt="person watching checklist" />
              </figure>
    
              <div>
                <header>Step 3. Complete the Orientation Process</header>
                <p>
                  Frank knew there was a correct time and place to reveal his secret and this wasn't it. The issue was that the secret might be revealed despite his best attempt to keep it from coming out.
                </p>
              </div>
            </article>
    
          </div>
        </article>
      </div>
    </section>
  )
}

export default ThreeSteps