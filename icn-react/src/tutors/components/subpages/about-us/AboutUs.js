import banner from 'commons/images/sub-banner4.jpg';
import { Link } from 'react-router-dom';
import JoinUsToday from './JoinUsToday';
import OurHistory from './OurHistory';
import OurValue from './OurValue';

const AboutUs = () => {
  return (
    <div className="subpageStyling aboutUs">
      <main className="subMain">
        <div>
          <p>About us</p>
          <header>
            You can join with ICN <br/> 
            and use your skill to <br/>
            <mark>teach &amp; earn</mark>
          </header>
          <Link to="/" className="blueButton">Become tutor now</Link>
        </div>
        <figure>
          <img src={banner} alt="person typing"/>
        </figure>
      </main>

      <OurHistory title="Our history"/>
      <OurValue title="Our value"/>
      <JoinUsToday title="Join us today"/>
    </div>
  )
}

export default AboutUs