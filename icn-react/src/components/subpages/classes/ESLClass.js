import { ContentItem } from 'components/items/content-item/ContentItem'
import { Link } from 'react-router-dom'
import contents from 'components/items/content-item/contents.json'

const ESLClass = ({title}) => {
  return (
    <section>
      <h2 className="sectionTitle">
        <span>{title}</span>
        <Link to="">See all
        <span className="material-icons">navigate_next</span>
        </Link>
      </h2>

      <article>
        {
          contents.map((content, index) => {
            return(
              <div key={index}>
                <ContentItem
                  id={content.id}
                  thumbnail={content.thumbnail}
                  // tags={content.tags}
                  title={content.title}
                  profile={content.profile}
                  tutorName={content.tutorName}
                  university={content.university}
                />
              </div>
              )
            }
          )
        }
      </article>

    </section>
  )
}

export default ESLClass