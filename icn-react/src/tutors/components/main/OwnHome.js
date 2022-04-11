import ServiceItem from "commons/items/service-item/ServiceItem"

const OwnHome = () => {
  return (
    <section className="ourHome">
      <div>
        <h2 className="sectionTitle">
          <span>
            Teach professional English online <br/>
            from <strong>your own home</strong>
          </span>
        </h2>
  
        <article>
          <div className="serviceItems">
            <ServiceItem 
              bg="blue"
              icon="bxs-calendar-week"
              header="Flexible"
              content="Choose your own hours. Work from home on your terms"
            />
            <ServiceItem 
              bg="orange"
              icon="bxs-network-chart"
              header="Networking"
              content="Hone interpersonal skills and cultural awareness along the way."
            />
            <ServiceItem 
              bg="green"
              icon="bxs-book"
              header="Hassle-free"
              content="Don't worry about preparing lesson plans. Our ICN packets do the work for you."
            />
          </div>
        </article>
      </div>
    </section>
  )
}

export default OwnHome