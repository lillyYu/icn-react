import 'commons/scss/items/content-item.scss';

export const ContentItem = (props) => {
  return (
    <div className="contentItem">
      <figure>
        <img src={props.thumbnail} alt={props.title}/>
      </figure>

      <div className="infoWrap">
        <ul className="tags">
          <li className={props.tags}>{props.tags}</li>
        </ul>
  
        <header>{props.title}</header>
  
        <div className="tutorProfile">
          <figure>
            <img src={props.profile} alt={props.tutorName}/>
          </figure>
          <p>
            <span>{props.tutorName}</span>
            <span>{props.university}</span>
          </p>
        </div>
      </div>
    </div>
  )
}