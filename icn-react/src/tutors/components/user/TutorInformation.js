import React from 'react'
import { Link } from 'react-router-dom'
import BankInformation from './BankInformation'
import EducationInformation from './EducationInformation'
import CountrySelector from './inputs/CountrySelector'
import ProfileInformation from './ProfileInformation'

const TutorInformation = () => {
  return (
    <div className='sign'>
      {/* <ProfileInformation /> */}

      {/* <EducationInformation /> */}

      <BankInformation />
    </div>
  )
}

export default TutorInformation