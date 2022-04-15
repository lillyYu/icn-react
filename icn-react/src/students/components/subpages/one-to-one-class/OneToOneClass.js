import React, { useState } from 'react'
import ClassRegister from './tabs/ClassRegister'
import OngoingClass from './tabs/OngoingClass'
import PreviousClass from './tabs/PreviousClass'
import 'students/components/scss/subpages/class-register/class-register.scss';

const OneToOneClass = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [onGoingClass, SetOnGoingClass] = useState(8);

  const classTabs = [
    { name: 'Class register', content: <ClassRegister />  },
    { name: `Ongoing class (${onGoingClass})`, content: <OngoingClass /> },
    { name: 'Previous class', content: <PreviousClass /> }
  ]

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <div className='oneToOnClass'>
      <div className='webWrap'>
        <ul className="tabButtons">
          {classTabs.map((ele, index)=>{
            return (
              <li
                key={index}
                className={currentTab === index ? "active" : ""}
                onClick={()=> selectMenuHandler(index)}
              >
              {ele.name}
              </li>
              )
          })}
        </ul>

        <div className='tabContents'>
          {classTabs[currentTab].content}
        </div>
      </div>
    </div>
  )
}

export default OneToOneClass