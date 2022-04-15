import ProcessItem from 'commons/items/process-item/ProcessItem'
import React, { useState } from 'react'
import BankInformation from './inputs/sign-steps/BankInformation'
import EducationInformation from './inputs/sign-steps/EducationInformation'
import ProfileInformation from './inputs/sign-steps/ProfileInformation'

const TutorInformation = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleNext =() => {
    setCurrentTab(currentTab + 1);
  }

  const handlePrevious =() => {
    setCurrentTab(currentTab - 1);
  }

  const signSteps = [
    {
      id: 0,
      name: 'Profile Information',
      icon: 'bx-user',
      content: <ProfileInformation handleNext={handleNext}/>
    },
    {
      id: 1,
      name: 'Education Information',
      icon: 'bxs-school',
      content: <EducationInformation handleNext={handleNext} handlePrevious={handlePrevious}/>
    },
    {
      id: 2,
      name: 'Bank Information',
      icon: 'bx-credit-card',
      content: <BankInformation handlePrevious={handlePrevious} />
    }
  ]

  return (
    <div className='sign'>
      <div className='signWrap'>

        <ProcessItem steps={signSteps} currentTab={currentTab} />
        
        {signSteps[currentTab].content}
      </div>
    </div>
  )
}

export default TutorInformation