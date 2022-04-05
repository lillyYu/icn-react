import React from 'react'
import howTo1 from 'commons/images/how-to1.png';
import howTo2 from 'commons/images/how-to2.png';
import howTo3 from 'commons/images/how-to3.png';
import howTo4 from 'commons/images/how-to4.png';

const RegisterClass = ({title}) => {
  return (
    <section>
      <h2 className="sectionTitle">{title}</h2>

      <div className='registerClassWrap'>
        <article>
          <figure>
            <img src={howTo1} alt="person looking into web" />
          </figure>

          <div>
            <header>Step 1. Select contents</header>
            <p>
              Frank knew there was a correct time and place to reveal his secret and this wasn't it. The issue was that the secret might be revealed despite his best attempt to keep it from coming out.
            </p>
          </div>
        </article>
        <hr className='divider right'/>

        <article>
          <div>
            <header>Step 2. Select tutors</header>
            <p>
              Frank knew there was a correct time and place to reveal his secret and this wasn't it. The issue.
            </p>
          </div>

          <figure>
            <img src={howTo2} alt="people in web" />
          </figure>
        </article>

        <hr className='divider left'/>
        <article>
          <figure>
            <img src={howTo3} alt="person pointing calendar" />
          </figure>

          <div>
            <header>Step 3. Select schedule</header>
            <p>
              Frank knew there was a correct time and place to reveal his secret and this wasn't it. The issue was that the secret might be revealed despite his best attempt to keep it from coming out.
            </p>
          </div>
        </article>

        <hr className='divider right'/>

        <article>
          <div>
            <header>Step 4. Complete</header>
            <p>
              Frank knew there was a correct time and place to reveal his secret and this wasn't it. The issue.
            </p>
          </div>

          <figure>
            <img src={howTo4} alt="person surfing on web" />
          </figure>
        </article>
      </div>
    </section>
  )
}

export default RegisterClass