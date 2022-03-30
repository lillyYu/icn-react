import { TutorItem } from "components/items/tutor-item/TutorItem";
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import tutors from 'components/items/tutor-item/tutors.json';

export const NewTutors = (props) => {
  // slick Options
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false
  };

  return(
    <section className="newTutor">
      <h2 className="sectionTitle">
        <span>{props.sectionTitle}</span>
        <Link to="/">
          See all
          <span className="material-icons">navigate_next</span>
        </Link>
      </h2>

      <article>
        <Slider {...settings} className="slickSlider">
          {
            tutors.map((tutor) => {
              return(
                <div className="slickSlides">
                  <TutorItem 
                    id={tutor.id}
                    profile={tutor.profile}
                    tags={tutor.tags}
                    tutorName={tutor.tutorName}
                    university={tutor.university}
                    rate={tutor.rate}
                    rateNum={tutor.rateNum}
                  />
                </div>
                )
              }
            )
          }
        </Slider>

      </article>
    </section>
  )
}