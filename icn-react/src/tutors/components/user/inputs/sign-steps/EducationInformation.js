import React from 'react'

const EducationInformation = ({handleNext, handlePrevious}) => {
  return (
    <>
      <h1 className="userHeader">Education information</h1>
  
      <form>
        <section>
          <h2>Education info</h2>

          <div className='inputLabel'>
            <label htmlFor="shoolName">School name</label>
            <input 
              type="text"
              id="shoolName"
              placeholder="Your school/university name"
            />
          </div>

          <div className='inputLabel'>
            <label htmlFor="major">Major</label>
            <input 
              type="text"
              id="major"
              placeholder="Your major"
            />
          </div>
        </section>

        <section>
          <h2>Diploma file</h2>
          <div className='fileUpload'>
            <i className='bx bx-cloud-upload' ></i>
            <p><span className='mobileDisplayNone'>Drag or </span>upload your diploma file here</p>
            <input 
              type="file"
            />
          </div>
        </section>

        <div className='buttons'>
          <button type='button' onClick={handlePrevious}>Previous</button>
          <button type='button' onClick={handleNext}>Continue</button>
        </div>
      </form>
    </>
  )
}

export default EducationInformation