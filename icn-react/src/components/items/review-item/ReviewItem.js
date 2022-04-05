import React from 'react'
import Stars from '../star-rating/Stars'
import 'components/scss/items/review-item.scss';
import StarRate from '../star-rating/StarRate';

const ReviewItem = ({ student, tutor, rate, content }) => {
  return (
    <article className='reviewItem'>
      <header>{student}</header>
      <span>Tutor: <strong>{tutor}</strong></span>
      <StarRate rate={rate} color={true}/>
      <p>
        {content}
      </p>
    </article>
  )
}

export default ReviewItem