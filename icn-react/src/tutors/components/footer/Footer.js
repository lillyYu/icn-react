import { Link } from "react-router-dom";

export const Footer = () => {
  return(
    <footer className="footer">
      <div className="webWrap">
        <div className="footerTop">
          <div className="footerLeft">
            <p>Join our class &amp; <br />improve your skill</p>
            <p>
              The best and lagest online tutoring application in Korea. 
            </p>
            <p>
              The most complete online learning solution
            </p>
            <Link to='/students/sign-up' className="whiteButton">Sign up now</Link>
          </div>
  
          <div className="footerRight">
            <ul>
              <li>
                <span>Lesson</span>
                <div>Over view</div>
                <div>Tutor</div>
                <div>Pricing</div>
              </li>
              <li>
                <span>About Us</span>
                <div>Business English</div>
                <div>Education</div>
                <div>Certified tutors</div>
                <div>Professional tutors</div>
              </li>
  
              <li>
                <section>
                  <span>Tutor</span>
                  <div>Become a tutor</div>
                </section>
                <section>
                  <span>Career</span>
                  <div>Internship</div>
                  <div>Career offer</div>
                </section>
              </li>
              <li>
                <span>FAQ</span>
                <div>Most asked question</div>
              </li>
            </ul>
          </div>
        </div>
  
        <div className="footerBottom">
          <header>ICN</header>
          <p>The most complete online learning solution</p>
          <div>
            <span>Terms &amp; Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}