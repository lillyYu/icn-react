import { Link } from "react-router-dom"
import spaceShip from "commons/images/spaceship.png";

export const ImproveSkill = () => {
  return(
    <section className="improveSkill">
      <div className="webWrap">
        <article>
          <h3 className="sectionTitle">
            <span>Improve Your Skill<br/>
              With <mark>Our Class &amp; Tutor</mark>
            </span>
    
            <p>
              The best and lagest online tutoring application in Korea.
            </p>
            <p>
              The most complete online learning solution
            </p>
    
            <Link to="/" className="blueButton">Class register now!</Link>
          </h3>
    
          <img src={spaceShip} alt="spaceship" />
        </article>
      </div>

    </section>
  )
}