import { Link } from "react-router-dom"

export const SignUp = () => {
  return(
    <div className="sign">
      <div className="inputWrap">
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
          <div>
            <label htmlFor="password">Password (ID) <strong>*</strong></label>
            <input 
              type="password"
              id="password"
              placeholder="Your password"
            />
          </div>
  
          <div>
            <label htmlFor="re-password">Re-enter Password <strong>*</strong></label>
            <input 
              type="password"
              id="re-password"
              placeholder="Your password"
            />
          </div>
  
          <button>Sign up</button>
        </form>
      </div>

      <p>Have an account? <Link to="/students/sign-in">Sign in</Link></p>
    </div>
  )
}