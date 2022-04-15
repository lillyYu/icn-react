import { ContentItem } from 'commons/items/content-item/ContentItem';
import { Link } from 'react-router-dom';
import 'students/components/scss/main/main.scss';
import contents from 'commons/items/content-item/contents.json'
import tutors from 'commons/items/tutor-item/tutors.json';
import { TutorItem } from 'commons/items/tutor-item/TutorItem';

const Main = () => {
  return (
    <div className='studentMain'>
      <div className='studentMainWrap webWrap '>
        <aside>
          <ul>
            <li className='blue'>
              <div>
                <i className='bx bx-time-five' />
                <p>Lessons in 24 hours</p>
              </div>
              <span>12</span>
            </li>
            <li className='red'>
              <div>
                <i className='bx bx-calendar-exclamation'></i>
                <p>Upcoming Lessons</p>
              </div>
              <span>21</span>
            </li>
            <li className='green'>
              <div>
                <i className='bx bx-notepad'></i>
                <p>Lessons to review</p>
              </div>
              <span>0</span>
            </li>
            <li>
              <div>
                <i class='bx bx-calendar-plus'></i>
                <p>Book class</p>
              </div>
            </li>
            <li>
              <div>
                <i class='bx bx-user-plus'></i>
                <p>Invite friends</p>
              </div>
            </li>
            <li>
              <div>
                <i class='bx bx-cart-add' ></i>
                <p>Buy credit</p>
              </div>
            </li>
          </ul>
        </aside>

        <main>
          <section>
            <h2 className="sectionTitle">
              <span>Daily Brief</span>
              <Link to="">See all
                <span className="material-icons">navigate_next</span>
              </Link>
            </h2>

            <div className='contentsWrap'>
              {
                contents.slice(0,2).map((content, index) => {
                  return(
                    <div key={index} className="contentItemWrap">
                      <Link to={`/class/${content.title}`}>
                        <ContentItem
                          id={content.id}
                          thumbnail={content.thumbnail}
                          // tags={content.tags}
                          title={content.title}
                          profile={content.profile}
                          tutorName={content.tutorName}
                          university={content.university}
                        />
                      </Link>
                    </div>
                    )
                  }
                )
              }
            </div>
          </section>

          <section>
            <h2 className="sectionTitle">
              <span>Recommend Tutors</span>
              <Link to="">See all
                <span className="material-icons">navigate_next</span>
              </Link>
            </h2>

            <div>
              {
                tutors.slice(0,3).map((tutor, index) => {
                  return(
                    <TutorItem 
                      id={tutor.id}
                      business={tutor.tags[0].name}
                      education={tutor.tags[1].name}
                      profile={tutor.profile}
                      tutorName={tutor.tutorName}
                      university={tutor.university}
                      rate={tutor.rate}
                      rateNum={tutor.rateNum}
                    />
                    )
                  }
                )
              }
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Main