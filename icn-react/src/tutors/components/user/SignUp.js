import { Link } from "react-router-dom"

export const SignUp = () => {
  return(
    <div className="sign">
      <div className="inputWrap">
        <h1 className="userHeader">
          Enter your current university email address
        </h1>

        <p>
          If you have already graduated and no longer have access to a university email address, please enter your current email address and check "I am no longer a student."
        </p>

        <form>
          <div>
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
  
          <button>Sign up</button>
        </form>
      </div>

      <p>Have an account? <Link to="/students/sign-in">Verify email address</Link></p>
    </div>
  )
}