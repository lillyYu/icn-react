import ServiceItem from 'students/components/items/service-item/ServiceItem'
import React from 'react'

const AfterClass = ({title}) => {
  return (
    <section>
      <div className='webWrap'>
        <h2 className="sectionTitle">{title}</h2>
  
        <div className="serviceItems">
          <ServiceItem 
            bg="blue"
            icon="bxs-note"
            header="Correct notes from lessons"
            content="You can review the tutor correction doc that you used during the lesson."
          />
          <ServiceItem 
            bg="orange"
            icon="bxs-user-voice"
            header="Recording &amp; transcript"
            content="You can review the tutor correction doc that you used during the lesson."
          />
          <ServiceItem 
            bg="green"
            icon="bxs-bar-chart-square"
            header="AI Analysis"
            content="You can review the tutor correction doc that you used during the lesson."
          />
          <ServiceItem 
            bg="red"
            icon="bxs-chat"
            header="Comprehensive feedback"
            content="After each lesson, your tutor will leave a detailed feedback on vocabulary, fluency, grammar, and pronunciation."
          />
        </div>
      </div>
    </section>
  )
}

export default AfterClass