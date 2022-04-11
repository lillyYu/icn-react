import React from 'react'
import Slider from 'react-slick/lib/slider'
import reviews from 'students/components/items/review-item/reviews.json';
import ReviewItem from 'students/components/items/review-item/ReviewItem';

const StudentReviews = ({title}) => {
  // slick Options
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,

    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  };

  return (
    <section className="blueBg">
      <div className='webWrap'>
        <h2 className="sectionTitle">{title}</h2>
        
        <div className="reviewWrap">
          <Slider {...settings} className="slickSlider">
              {
                reviews.map((review) => {
                  return(
                    <div key={review.id}>
                      <ReviewItem 
                        id={review.id}
                        student={review.student}
                        tutor={review.tutor}
                        rate={review.rate}
                        content={review.content}
                      />
                    </div>
                  )
                })
              }
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default StudentReviews