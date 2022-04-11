import { Link } from "react-router-dom"
import { ContentItem } from "../items/content-item/ContentItem";

import contents from 'students/components/items/content-item/contents.json'

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
                <div key={index} className="contentItemWrap">
                  <Link to={`/students/class/${content.title}`}>
                    <ContentItem
                      id={content.id}
                      thumbnail={content.thumbnail}
                      // tags={content.tags}
                      title={content.title}
                      profile={content.profile}
                      tutorName={content.tutorName}
                      university={content.university}
                    />
                  </Link>
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