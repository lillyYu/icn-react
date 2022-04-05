import { Link } from "react-router-dom"
import banner from 'commons/images/sub-banner4.jpg'
import BusinessClass from "./BusinessClass"
import ESLClass from "./ESLClass"
import ExamClass from "./ExamClass"
import BasicClass from "./BasicClass"

export const Class =() => {
  return(
    <div className="subpageStyling class">
      <main className="subMain">
        <div>
          <header>
            Upgrade your skill<br/>
            with <mark>our class</mark>
          </header>
          <p className='mainParagraph'>
            The best and lagest online tutoring application in Korea.<br/>
            The most complete online learning solution
          </p>
        </div>
        <figure>
          <img src={banner} alt="person typing"/>
        </figure>
      </main>

      <BusinessClass title="Business"/>
      <ESLClass title="ESL"/>
      <ExamClass title="Exam"/>
      <BasicClass title="Basic"/>
      
    </div>
  )
}