import React from 'react'

const EducationInformation = () => {
  return (
    <div className='signWrap'>
      <div className="signProcess">
        <ul>
          <li className='done'>
            <i class='bx bx-user'></i>
          </li>
          <li className='active'>
            <i class='bx bxs-school'></i>
          </li>
          <li>
            <i class='bx bx-credit-card'></i>
          </li>
        </ul>
      </div>
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
            <i class='bx bx-cloud-upload' ></i>
            <p><div className='mobileDisplayNone'>Drag or </div>upload your diploma file here</p>
            <input 
              type="file"
            />
          </div>
        </section>

        <button>Continue</button>
      </form>
    </div>
  )
}

export default EducationInformation