import { Link } from 'react-router-dom'
import banner from 'commons/images/faq-main-banner.jpg';
import TopicList from './TopicList';

const Faq = () => {
  return (
    <div className="subpageStyling faqStyling">
      <main className="subMain">
        <div>
          <header>
            Frequently asked <br/>
            questions &amp; topics
          </header>

          <p className='mainParagraph mobileDisplayNone'>
            The best and lagest online tutoring application in Korea.
            The most complete online learning solution
          </p>

          <Link to="/" className="blueButton">Contact us</Link>
        </div>
        <figure>
          <img src={banner} alt="person typing"/>
        </figure>
      </main>

      <TopicList title="Topic list"/>
    </div>
  )
}

export default Faq