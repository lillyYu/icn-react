import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const FindPassword = () => {
  const [next, setNext] = useState(false);
  const nextHandler = () => {
    setNext(false)
  }

  const prevHandler =() => {
    setNext(true)
  }
  
  return (
    <div className="sign">
      { next ?
        <div className='inputWrap'>
          <h1 className="userHeader">Sign up with email</h1>
    
          <form>
            <div>
              <label htmlFor="email">Email address (ID) <strong>*</strong></label>
              <input 
                type="email"
                id="email"
                placeholder="Your email"
              />
            </div>
    
            <button onClick={nextHandler}>Verify email</button>
          </form>
        </div>
        :
        <div className='inputWrap'>
          <h1 className="userHeader">Sign up with email</h1>
    
          <form>
            <div>
              <label htmlFor="email">Enter security code <strong>*</strong></label>
              <input 
                type="email"
                id="email"
                placeholder="XXX - XXX - XXX -XXX"
              />
            </div>
    
            <button onClick={prevHandler}>Verify code</button>
          </form>
        </div>
      }


      <p>Remember your password? <Link to="/sign-in">Sign in</Link></p>
    </div>
  )
}

export default FindPassword