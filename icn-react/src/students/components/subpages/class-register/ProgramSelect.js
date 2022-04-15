import React from 'react'

const ProgramSelect = ({handleNext}) => {
  const handleProgramOption = (e) => {
    // console.log(e.target.value);
  }

  const programOptions = [
    {
      id: 1,
      name: '20 min class',
      for: 'class20'
    },
    {
      id: 2,
      name: '40 min class',
      for: 'class40'
    },
    {
      id: 3,
      name: '20 min class & business meeting',
      for: 'classBusiness20'
    },
    {
      id: 4,
      name: '40 min class & business meeting',
      for: 'classBusiness40'
    },
    {
      id: 5,
      name: '20 min business meeting',
      for: 'business20'
    },
    {
      id: 6,
      name: '40 min business meeting',
      for: 'business40'
    }
  ]
  return (
    <div className='programSelect'>
      <h1>Program select</h1>

      <ul>
          {
            programOptions.map((programOption) => {
              return(
                <li key={programOption.id} className="radioWrap">
                  <input
                    type="radio"
                    id={programOption.for}
                    name="programOption"
                    onChange={handleProgramOption}
                    value={programOption.name}
                  />
                  <label htmlFor={programOption.for}>
                    <span>{programOption.name}</span>
                  </label>
                </li>
              )
            })
          }
      </ul>

      <button onClick={handleNext} className="continueButton">Continue</button>
    </div>
  )
}

export default ProgramSelect