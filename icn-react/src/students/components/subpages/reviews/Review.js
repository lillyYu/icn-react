import banner from 'commons/images/sub-banner3.jpg'
import StudentReviews from 'students/components/subpages/what-is/StudentReviews';
import RecommendReviews from './RecommendReviews';

export const Review =() => {

  return(
    <div className="subpageStyling review">
      <main className="subMain">
        <div>
          <header>
            What student talk<br/>
            <mark>about us</mark>
          </header>
          <p className='mainParagraph'>
            The best and lagest online tutoring application in Korea.<br/>
            The most complete online learning solution
          </p>
        </div>
        <figure className='mobileDisplayNone'>
          <img src={banner} alt="person typing"/>
        </figure>
      </main>
      <RecommendReviews title="Recommend Reviews"/>
      <StudentReviews title="Student Reviews"/>
    </div>
  )
}