import React from 'react'
import { Link } from 'react-router-dom'
import CountrySelector from './inputs/CountrySelector'

const ProfileInformation = ({handleNext}) => {
  return (
    <>
      <h1 className="userHeader">Profile information</h1>
  
      <form>
        <section>
          <h2>Name</h2>

          <div className='inputLabel'>
            <label htmlFor="firstName">First name</label>
            <input 
              type="text"
              id="firstName"
              placeholder="First name"
            />
          </div>

          <div className='inputLabel'>
            <label htmlFor="lastName">Last name</label>
            <input 
              type="text"
              id="lastName"
              placeholder="Last name"
            />
          </div>
        </section>

        <section>
          <h2>Birthday</h2>

          <div className='inputLabel'>
            <label htmlFor="birthday">Your birthday</label>
            <input 
              type="text"
              id="birthday"
              placeholder="DD/MM/YYYY"
            />
          </div>
        </section>

        <section>
          <h2>Location</h2>

          <div className='inputLabel'>
            <label htmlFor="country">Country</label>
            <CountrySelector />
          </div>

          <div className='inputLabel'>
            <label htmlFor="state">State (optional)</label>
            <input 
              type="text"
              id="state"
              placeholder="Your state"
            />
          </div>

          <div className='inputLabel'>
            <label htmlFor="city">City</label>
            <input 
              type="text"
              id="city"
              placeholder="Your city"
            />
          </div>

          <div className='inputLabel'>
            <label htmlFor="timezone">Timezone</label>
            <input 
              type="text"
              id="timezone"
              placeholder="Your timezone"
            />
          </div>
        </section>

        <section>
          <h2>Mobile number</h2>

          <div className='inputLabel'>
            <label htmlFor="countryNum">Country</label>
            <input 
              type="text"
              id="countryNum"
              placeholder="Country number"
            />
          </div>

          <div className='inputLabel'>
            <label htmlFor="phone">Your number</label>
            <div className='inputButton'>
              <input 
                type="text"
                id="phone"
                placeholder="Your number"
              />
              <button>Send code</button>
            </div>
          </div>

          <div className='inputLabel'>
            <label htmlFor="phoneCode">Verify mobile code</label>
            <div className='inputButton'>
              <input 
                type="text"
                id="phoneCode"
                placeholder="Your mobile code"
              />
              <button>Verify code</button>
            </div>
          </div>

        </section>

        <div className="checkboxWrap">
          <input
            type="checkbox"
            id="noStudent"
          />
          <label htmlFor="noStudent"><span>By signing up, I agree to <Link to="/">ICN’s Privacy Policy.</Link></span></label>
        </div>

        <div className='buttons'>
          <Link to="/tutors/sign-up">Previous</Link>
          <button type='button' onClick={handleNext}>Continue</button>
        </div>
      </form>
    </>
  )
}

export default ProfileInformation