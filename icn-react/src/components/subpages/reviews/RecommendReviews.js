import React, { useState } from 'react'
import student1 from 'commons/images/student-example1.jpg';
import student2 from 'commons/images/profile-sample1.jpg';
import student3 from 'commons/images/profile-sample2.jpg';
import student4 from 'commons/images/profile-sample3.jpg';
import Slider from 'react-slick/lib/slider';


const RecommendReviews = ({title}) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const studentReviews = [
    {
      id: 1,
      studentImg : student1,
      reviewHeader : '“Excellent progression of material”',
      reviewContent : '“Between games, many bowlers drifted to the alley’s pro shop to soak in the wisdom of Maurice “Mo” Pinel, a star ball designer for the sporting-goods giant AMF. Pinel had come to Cincinnati to promote his latest creation, the Sumo. The bowling ball had launched the year before, backed by a TV commercial featuring a ginormous Japanese wrestler bellyflopping down a lane, with the tagline “Flat out, more power than you’ve ever seen in a bowling center.”',
      studentName : 'Michael Jonata',
      studentNation : 'Manila, Philippine'
    },
    {
      id: 2,
      studentImg : student2,
      reviewHeader : '“I highly recommend this tutor~”',
      reviewContent : '“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.”',
      studentName : 'Alan Day',
      studentNation : 'Seoul, Korea'
    },
    {
      id: 3,
      studentImg : student3,
      reviewHeader : '“This tutor is the greatest!”',
      reviewContent : '“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.”',
      studentName : 'Marshall Buckley',
      studentNation : 'Tokyo, Japan'
    },
    {
      id: 4,
      studentImg : student4,
      reviewHeader : '“Review Header goes here!!!!”',
      reviewContent : '“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.”',
      studentName : 'Hector Waters',
      studentNation : 'London, United Kingdom'
    }
  ]

  return (
    <section>
      <div className='webWrap'>
        <h2 className="sectionTitle">{title}</h2>
        
        <div className="recommendReviewWrap">
          <article>
            <Slider 
              slidesToShow={1}
              asNavFor={nav2}
              ref={(slider1) => setNav1(slider1)}
              fade={true}
            >
              {
                studentReviews.map((studentReview) => {
                  return(
                    <figure key={studentReview.id}>
                      <img src={studentReview.studentImg} alt={`'student' ${studentReview.studentName}` }/>
                    </figure>
                  )
                })
              }
            </Slider>
  
            <Slider 
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
              slidesToShow={1}
              swipeToSlide={true}
              focusOnSelect={true}
              dots={true}
            >
              {
                studentReviews.map((studentReview) => {
                  return(
                    <div key={studentReview.id}>
                      <span>
                        {studentReview.reviewHeader}
                      </span>
          
                      <p>
                        {studentReview.reviewContent}
                      </p>
          
                      <header>{studentReview.studentName}</header>
                      <em>{studentReview.studentNation}</em>
                    </div>
                  )
                })
              }
            </Slider>
          </article>
        </div>
      </div>
    </section>
  )
}

export default RecommendReviews