import ServiceItem from 'commons/items/service-item/ServiceItem'
import React from 'react'

const OurValue = ({title}) => {
  return (
    <section className='ourValue'>
      <div className='bgWrap'>
        <div className='webWrap'>
          <h2 className="sectionTitle">{title}</h2>
    
          <div className="serviceItems">
            <ServiceItem 
              bg="blue"
              icon="bxs-calendar-week"
              header="Provide opportunities"
              content="Choose your own hours. Work from home on your terms"
            />
            <ServiceItem 
              bg="orange"
              icon="bxs-network-chart"
              header="Connect changemaker"
              content="Hone interpersonal skills and cultural awareness along the way."
            />
            <ServiceItem 
              bg="green"
              icon="bxs-book"
              header="Build a global platform"
              content="Don't worry about preparing lesson plans. Our ICN packets do the work for you."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurValue