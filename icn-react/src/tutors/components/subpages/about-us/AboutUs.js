import banner from 'commons/images/sub-banner4.jpg';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="subpageStyling">
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

    </div>
  )
}

export default AboutUs