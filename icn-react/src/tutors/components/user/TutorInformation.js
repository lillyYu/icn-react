import React, { useState } from 'react'
import BankInformation from './BankInformation'
import EducationInformation from './EducationInformation'
import ProfileInformation from './ProfileInformation'

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

  function stepClass(signStep){
    if (currentTab === signStep.id){
      return 'active'
    } else if (currentTab === signStep.id + 1){
      return 'done'
    } else if (currentTab === signStep.id + 2){
      return 'done'
    } else {
      return ''
    }
  }
  
  return (
    <div className='sign'>
      <div className='signWrap'>
        <div className="signProcess">
          <ul>
            {
              signSteps.map((signStep) => {
                return(
                  <li className={stepClass(signStep)} key={signStep.id}>
                    <i className={`bx ${signStep.icon}`}></i>
                  </li>
                )
              })
            }
          </ul>
        </div>

        {signSteps[currentTab].content}
      </div>
    </div>
  )
}

export default TutorInformation