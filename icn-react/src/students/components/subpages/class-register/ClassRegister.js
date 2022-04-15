import ProcessItem from 'commons/items/process-item/ProcessItem';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import ContentSelect from './ContentSelect';
import ProgramSelect from './ProgramSelect';
import ScheduleSelect from './ScheduleSelect';

const ClassRegister = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleNext =() => {
    setCurrentTab(currentTab + 1);
  }

  const handlePrevious =() => {
    setCurrentTab(currentTab - 1);
  }

  const selectSteps = [
    {
      id: 0,
      name: 'Program',
      icon: 'bx-user',
      content: <ProgramSelect handleNext={handleNext}/>
    },
    {
      id: 1,
      name: 'Content',
      icon: 'bxs-school',
      content: <ContentSelect handleNext={handleNext} handlePrevious ={handlePrevious}/>
    },
    {
      id: 2,
      name: 'Tutor & Schedule',
      icon: 'bx-credit-card',
      content: <ScheduleSelect handlePrevious ={handlePrevious}/>
    }
  ]


  return (
    <div className='classRegister'>
      <div>
        <div className='webWrap'>
          <div className='breadcrumbs'>
            <Link to="/students/1:1-class" className='mobileDisplayNone'>
              <i className='bx bx-chevron-left'></i>
              <span>Back</span>
            </Link>
            <nav>
              <i className='bx bx-home-alt-2'></i>
              <span>Class register</span>
              <i className='bx bx-chevron-right'></i>
              <span>Program</span>
            </nav>
          </div>
        </div>

        <ProcessItem currentTab={currentTab} steps={selectSteps}/>
  
        <div className='selectContent'>
          {selectSteps[currentTab].content}
        </div>
      </div>
    </div>
  )
}

export default ClassRegister