import { Link } from "react-router-dom"
import banner from 'commons/images/sub-banner2.jpg'
import RegisterClass from "./RegisterClass"
import AfterClass from "./AfterClass"

export const HowTo =() => {
  return(
    <div className="subpageStyling howTo">
      <main className="subMain">
        <div>
          <p>Welcome to ICN</p>
          <header>
            Design your own lessons<br/>
            <mark>wherever &amp; whenever</mark>
          </header>
          <Link to="/sign-up" className="blueButton">Sign up now!</Link>
        </div>
        <figure>
          <img src={banner} alt="person typing"/>
        </figure>
      </main>
      
      <RegisterClass title="How to Register Us"/>

      <AfterClass title="After Class Service"/>
    </div>
  )
}