import { TutorItem } from "components/items/tutor-item/TutorItem";
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import tutors from 'components/items/tutor-item/tutors.json';
import { useEffect, useState } from "react";

export const NewTutors = (props) => {
  const [businessOn, setBusinessOn] = useState('');
  const [educationOn, setEducationOn] = useState('');

  // slick Options
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false
  };

  

  const tutorList = tutors.map((tutor, index) => {
    
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

  useEffect(() => {
    for ( let i = 0; i < tutors.length; i++) {
      let businessIs = tutors[i].tags[0].is;
      let educationIs = tutors[i].tags[1].is;
      console.log(businessIs);

      for( let j = 0; j < tutors[i].tags; j++ ){
        console.log(tutors[i].tags[j]);

        if(businessIs === true){

          } else if(educationIs === true) {
          }else{
            setBusinessOn('')
            setEducationOn('');
        }
      }
    

    }
  }, [tutors])

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
          {tutorList}
        </Slider>

      </article>
    </section>
  )
}