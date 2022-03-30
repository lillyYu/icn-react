import { TutorItem } from "components/items/tutor-item/TutorItem"
import { Link } from "react-router-dom"

// slick slider
import Slider from "react-slick";
import tutors from 'components/items/tutor-item/tutors.json';

export const ThisMonthTutor = (props) => {

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
    <section className="thisMonthTutor">
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
            tutors.map((tutor, index) => {
              return(
                <div className="slickSlides" key={index}>
                  <TutorItem 
                    id={tutor.id}
                    profile={tutor.profile}
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