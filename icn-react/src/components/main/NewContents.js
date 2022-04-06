import { Link } from "react-router-dom"
import { ContentItem } from "../items/content-item/ContentItem";

import contents from 'components/items/content-item/contents.json'

export const NewContents = (props) => {
  return(
    <section className="newContents">
      <div className="webWrap">
        <h2 className="sectionTitle">
          <span>{props.sectionTitle}</span>
          <Link to="/">
            See all
            <span className="material-icons">navigate_next</span>
          </Link>
        </h2>
  
        <article>
          {
            contents.slice(0, 3).map((content, index) => {
              return(
                <Link to={`/class/${content.title}`}>
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
                </Link>
                )
              }
            )
          }
        </article>
      </div>
    </section>
  )
}