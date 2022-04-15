import React from 'react'
import { Accordion } from './accordian/Accordian'

const ContentSelect = ({handleNext, handlePrevious}) => {
  const handleProgramOption = (e) => {
    // console.log(e.target.value);
  }

  const programOptions = [
    {
      id: 1,
      name: 'Marketing',
      for: 'marketing'
    },
    {
      id: 2,
      name: 'Office',
      for: 'office'
    },
    {
      id: 3,
      name: 'Accounting',
      for: 'accounting'
    },
    {
      id: 4,
      name: 'Restaurant business',
      for: 'reestaurantBusiness'
    }
  ]

  return (
    <div className='contentSelect'>
      <h1>Content select</h1>

      <article>
        <Accordion
          title="Business"
          content={programOptions}
          handleProgramOption={handleProgramOption}
        />

        <Accordion
          title="ESL"
          content={programOptions}
          handleProgramOption={handleProgramOption}
        />

        <Accordion
          title="Exam"
          content={programOptions}
          handleProgramOption={handleProgramOption}
        />

        <Accordion
          title="Basic"
          content={programOptions}
          handleProgramOption={handleProgramOption}
        />
      </article>

      <div className='buttons'>
        <button type='button' onClick={handlePrevious}>Previous</button>
        <button type='button' onClick={handleNext}>Continue</button>
      </div>
    </div>
  )
}

export default ContentSelect