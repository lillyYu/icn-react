import React from 'react'

const ProcessItem = ({steps, currentTab}) => {

  function stepClass(step){
    if (currentTab === step.id){
      return 'active'
    } else if (currentTab === step.id + 1){
      return 'done'
    } else if (currentTab === step.id + 2){
      return 'done'
    } else {
      return ''
    }
  }

  return (
    <div className="processStyling">
      <ul>
        {
          steps.map((step) => {
            return(
              <li className={stepClass(step)} key={step.id}>
                <i className={`bx ${step.icon}`}></i>
                <span>{step.name}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ProcessItem