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
    arrows: false,

    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }]
  };

  return(
    <section className="thisMonthTutor">
      <div className="webWrap">
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
                    <Link to={`/tutor/${tutor.id}`}>
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
                    </Link>
                  </div>
                  )
                }
              )
            }
          </Slider>
  
        </article>
      </div>
    </section>
  )
}