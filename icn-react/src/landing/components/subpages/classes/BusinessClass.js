import React from 'react'
import { Link } from 'react-router-dom'
import contents from 'commons/items/content-item/contents.json'
import { ContentItem } from 'commons/items/content-item/ContentItem'

const BusinessClass = ({title}) => {
  return (
    <section>
      <div className='webWrap'>
        <h2 className="sectionTitle">
          <span>{title}</span>
          <Link to="">See all
          <span className="material-icons">navigate_next</span>
          </Link>
        </h2>
  
        <article>
          {
            contents.slice(0, 3).map((content, index) => {
              return(
                <div key={index} className="contentItemWrap">
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
      </div>
    </section>
  )
}

export default BusinessClass