import 'students/components/scss/items/tutor-item.scss';
import StarRate from '../star-rating/StarRate';

export const TutorItem = (props) => {
  
  return(
    <div className="tutorItem">
      <figure>
        <img src={props.profile} alt={`${props.tutorName} name`}/>
      </figure>

      <div className="infoWrap">
        <ul className="tags">
          <li className={props.business}>{props.business}</li>
          <li className={props.education}>{props.education}</li>
        </ul>

        <header>{props.tutorName}</header>
        <p>{props.university}</p>

        <StarRate rate={props.rate.toFixed(1)} rateNum={props.rateNum} id={props.id}/>
      </div>
    </div>
  )
}