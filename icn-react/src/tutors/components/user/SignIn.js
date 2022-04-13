import { Link } from "react-router-dom";
import googleIcon from 'commons/images/google-icon.svg';
import appleIcon from 'commons/images/apple-icon.svg';
import kakaoIcon from 'commons/images/kakao-icon.svg';

import 'commons/scss/user/user.scss';

export const SignIn = () => {
  return(
    <div className="sign">
      <div className="signWrap">
        <h1 className="userHeader">Sign In</h1>
  
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
            <label htmlFor="password">Password <strong>*</strong></label>
            <input 
              type="password"
              id="password"
              placeholder="Your password"
            />
          </div>
  
          <div className="alignRight">
            <Link to="/tutors/find-password">Forgot Password?</Link>
          </div>
  
          <button>Sign in</button>
        </form>
  
      </div>
      
      <p>Don’t have account?<Link to="/tutors/sign-up"> Sign up</Link></p>
    </div>
  )
}