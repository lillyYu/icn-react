import { Link } from "react-router-dom"

export const SignUp = () => {
  return(
    <div className="sign">
      <div className="signWrap">
        <h1 className="userHeader">
          Enter your current university email address
        </h1>

        <div className="signUpText">
          <p>
            If you have already graduated and no longer have access to a university email address, </p>
          <p>
            please enter your current email address and check "I am no longer a student."
          </p>
        </div>

        <form>
          <div className="inputLabel">
            <label htmlFor="email">Email address (ID) <strong>*</strong></label>
            <input 
              type="email"
              id="email"
              placeholder="Your email"
            />
          </div>

          <div className="inputLabel">
            <label htmlFor="password">Your password</label>
            <input 
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>

            <div className="inputLabel">
            <label htmlFor="rePassword">Re-enter your password</label>
            <input 
              type="password"
              id="rePassword"
              placeholder="Password"
            />
          </div>

          <div className="checkboxWrap">
            <input
              type="checkbox"
              id="noStudent"
            />
            <label htmlFor="noStudent"><span>I am no longer a student</span></label>
          </div>
  
          <Link to="/tutors/information" className="nextButton">Sign up</Link>
        </form>
      </div>
      <p>Have an account? <Link to="/tutors/sign-in">Sign in</Link></p>
    </div>
  )
}