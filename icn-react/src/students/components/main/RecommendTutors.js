import { TutorItem } from "students/components/items/tutor-item/TutorItem";
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";

import tutors from 'students/components/items/tutor-item/tutors.json';

export const RecommendTutors =(props) => {
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
    <section className="recommendTutors">
      <div className="bgWrap">
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
                    </div>
                    )
                  }
                )
              }
            </Slider>
          </article>
        </div>
      </div>
    </section>
  )
}