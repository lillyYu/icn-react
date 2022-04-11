import Stars from 'students/components/items/star-rating/Stars'
import React from 'react'

const TutorReview = () => {
  return (
    <div className='tutorReview'>
      <section>
        <h2>Student reviews</h2>

        <div className='reviewGraph'>
          <div className='reviewLeft'>
            <strong>5.0</strong>
            <ul className='stars'>
              <li><i className='bx bxs-star'></i></li>
              <li><i className='bx bxs-star'></i></li>
              <li><i className='bx bxs-star'></i></li>
              <li><i className='bx bxs-star'></i></li>
              <li><i className='bx bxs-star'></i></li>
            </ul>
          </div>
          <div className='reviewRight'>
            <ul>
              <li>
                <span>Very Good</span>
                <p className='graphBar'>
                  <span style={{width: "90%"}}></span>
                </p>
                <span>90%</span>
              </li>
              <li>
                <span>Good</span>
                <p className='graphBar'>
                  <span style={{width: "1%"}}></span>
                </p>
                <span>1%</span>
              </li>
              <li>
                <span>Normal</span>
                <p className='graphBar'>
                  <span style={{width: "3%"}}></span>
                </p>
                <span>3%</span>
              </li>
              <li>
                <span>Bad</span>
                <p className='graphBar'>
                  <span style={{width: "2%"}}></span>
                </p>
                <span>2%</span>
              </li>
              <li>
                <span>Very Bad</span>
                <p className='graphBar'>
                  <span style={{width: "4%"}}></span>
                </p>
                <span>4%</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='studentComment'>
          <ul>
            <li>
              <header>Katherine Timo</header>
              <Stars />
              <p>
                Clear explanations, showed the python's features that make fundamental processes of data processing easy.
              </p>
            </li>
            <li>
              <header>Katherine Timo</header>
              <Stars />
              <p>
                You'll get a full understanding of how to program with Python and how to use it in conjunction with scientific computing modules and libraries to analyze data. You will also get lifetime access to over 100 example python code notebooks, new and updated videos, as well as future additions of various data analysis projects that you can use for a portfolio to show future employers!
              </p>
            </li>
          </ul>
          <button>
            <i class='bx bx-chevron-down'></i>
            Show more feedbacks
          </button>
        </div>
      </section>
    </div>
  )
}

export default TutorReview