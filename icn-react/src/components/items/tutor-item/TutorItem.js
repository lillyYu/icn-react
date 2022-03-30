import 'components/scss/items/tutor-item.scss';

export const TutorItem = (props) => {
  const starProportion = props.rate * 21;
  
  console.log(starProportion);
  return(
    <div className="tutorItem">
      <figure>
        <img src={props.profile} alt={`${props.tutorName} name`}/>
      </figure>

      <div className="infoWrap">
        <ul className="tags">
          <li className={props.tags}>{props.tags}</li>
        </ul>

        <header>{props.tutorName}</header>
        <p>{props.university}</p>

        <div className="starRate">
          <ul className='stars'>
            <li style={{ width: `${starProportion}%`}}></li>
          </ul>

          <span>{props.rate}</span>
          <span>({props.rateNum} rating)</span>
        </div>
      </div>
    </div>
  )
}