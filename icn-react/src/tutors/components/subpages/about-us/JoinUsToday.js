import joinUsImage from 'commons/images/join-us-today.png';
import { Link } from 'react-router-dom';

const JoinUsToday = ({title}) => {
  return (
    <section className='joinUsToday'>
      <div className='webWrap'>
        <article>
          <figure>
            <img src={joinUsImage} alt="people sitting around desk"/>
          </figure>

          <div>
            <h2>{title}</h2>
  
            <p>
              The best learning environment for tutors and students alike, all while breaking down cultural, geographical and educational barriers.
            </p>

            <Link to="/sign-up" className='blueButton'>Get started</Link>
          </div>
        </article>
      </div>
    </section>
  )
}

export default JoinUsToday