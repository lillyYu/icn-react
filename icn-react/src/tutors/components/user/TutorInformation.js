import React from 'react'
import { Link } from 'react-router-dom'
import CountrySelector from './inputs/CountrySelector'

const TutorInformation = () => {
  return (
    <div className='sign'>
      <div className='signWrap'>
        <h1 className="userHeader">Enter your information</h1>
  
        <form>
          <div className='inputLabel'>
            <label htmlFor="email">Email address (ID) <strong>*</strong></label>
            <input 
              type="email"
              id="email"
              value="emailgoeshere@email.com"
              disabled={true}
            />
          </div>

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
            <h2>Password</h2>
  
            <div className='inputLabel'>
              <label htmlFor="password">Your password</label>
              <input 
                type="password"
                id="password"
                placeholder="Password"
              />
            </div>

            <div className='inputLabel'>
              <label htmlFor="rePassword">Re-enter your password</label>
              <input 
                type="Password"
                id="rePassword"
                placeholder="Password"
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
              <label htmlFor="city">City</label>
              <input 
                type="text"
                id="city"
                placeholder="Your city"
              />
            </div>

            <div className='inputLabel'>
              <label htmlFor="timeZone">Time zone</label>
              <input 
                type="text"
                id="timeZone"
                placeholder="Your Time zone"
              />
            </div>
          </section>

          <section>
            <h2>Mobile number</h2>
  
            <div className='inputLabel'>
              <label htmlFor="countryNum">Country number</label>
              <input 
                type="text"
                id="countryNum"
                placeholder="Country number"
              />
            </div>
          </section>

          <div className="checkboxWrap">
            <input
              type="checkbox"
              id="noStudent"
            />
            <label htmlFor="noStudent"><span>By signing up, I agree to <Link to="/">ICN’s Privacy Policy.</Link></span></label>
          </div>

          <button>Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default TutorInformation