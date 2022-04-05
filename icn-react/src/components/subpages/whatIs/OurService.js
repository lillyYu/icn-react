import ServiceItem from 'components/items/service-item/ServiceItem'
import React from 'react'
import 'components/scss/items/service-item.scss'

const OurService = ({title}) => {
  return (
    <section>
      <h2 className="sectionTitle">{title}</h2>

      <div className="serviceItems">
        <ServiceItem 
          bg="blue"
          icon="bxs-briefcase"
          header="Business English"
          content="The leather jacked showed the scars of being his favorite for years. It wore those scars with pride, feeling that they enhanced his presence rather than diminishing it."
          link={true}
        />
        <ServiceItem 
          bg="orange"
          icon="bxs-check-shield"
          header="Certified Tutors"
          content="The leather jacked showed the scars of being his favorite for years. It wore those scars with pride, feeling that they enhanced his presence rather than diminishing it."
          link={true}
        />
        <ServiceItem 
          bg="green"
          icon="bxs-graduation"
          header="Education"
          content="The leather jacked showed the scars of being his favorite for years. It wore those scars with pride, feeling that they enhanced his presence rather than diminishing it."
          link={true}
        />
        <ServiceItem 
          bg="red"
          icon="bxs-user-check"
          header="Professional 
          Business Tutors"
          content="The leather jacked showed the scars of being his favorite for years. It wore those scars with pride, feeling that they enhanced his presence rather than diminishing it."
          link={true}
        />
      </div>
    </section>
  )
}

export default OurService