import { useState } from "react";
import { Link } from "react-router-dom"

export const SignUp = () => {
  const [next, setNext] = useState(true);

  const nextHandler = (e) => {
    e.preventDefault();
    setNext(false)
  }

  return(
    <div className="sign">
      {next ?
        <>
          <div className="signWrap">
            <h1 className="userHeader">
              Enter your current university email address
            </h1>
  
            <p>
              If you have already graduated and no longer have access to a university email address, <br/>
              please enter your current email address and check "I am no longer a student."
            </p>
  
            <form>
              <div className="inputLabel">
                <label htmlFor="email">Email address (ID) <strong>*</strong></label>
                <input 
                  type="email"
                  id="email"
                  placeholder="Your email"
                />
              </div>
  
              <div className="checkboxWrap">
                <input
                  type="checkbox"
                  id="noStudent"
                />
                <label htmlFor="noStudent"><span>I am no longer a student</span></label>
              </div>
      
              <button onClick={nextHandler}>Verify email address</button>
            </form>
          </div>
          <p>Have an account? <Link to="/tutors/sign-in">Sign in</Link></p>
        </>
      :
        <>
          <div className="signWrap">
            <h1 className="userHeader">
              Verify your email address
            </h1>
  
            <form>
              <div className="inputLabel">
                <label htmlFor="email">Enter security code <strong>*</strong></label>
                <input 
                  type="email"
                  id="email"
                  placeholder="XXX - XXX - XXX -XXX"
                />
              </div>
      
              <Link to="/tutors/information" className="nextButton">Verify code</Link>
            </form>
          </div>
          <p>Haven't received an email? <Link to="/">Resend email</Link></p>
        </>

      }

    </div>
  )
}