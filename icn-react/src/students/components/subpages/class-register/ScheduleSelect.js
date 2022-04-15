import React, { useState } from 'react'
import tutors from 'commons/items/tutor-item/tutors.json';

const ScheduleSelect = ({handlePrevious}) => {
  const [currentTab, setCurrentTab] = useState(0);

  const tutorTabs = [
    { name: '유저', content: '<UserGraph />' },
    { name: '프로젝트', content: '' },
    { name: 'Q&A', content: '<QnaGraph />' },
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <div className='scheduleSelect'>
      <h1>Tutor &amp; Schedule</h1>

      <article>
        <aside>
          <div className='asideTop'>
            <h2>Select a tutor</h2>
            <input
              type="search"
              placeholder='Search tutor'
            />
          </div>

          <div className='asideBottom'>
            <ul className="tabButtons">
              {tutorTabs.map((ele, index)=>{
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
              {tutorTabs[currentTab].content}
            </div>
          </div>
        </aside>

        <main>

        </main>
      </article>

      <div className='buttons'>
        <button type='button' onClick={handlePrevious}>Previous</button>
        <button type='button'>done</button>
      </div>
    </div>
  )
}

export default ScheduleSelect