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
  
          <div className="alignRight">
            <Link to="/tutors/find-password">Forgot Password?</Link>
          </div>
  
          <button>Sign in</button>
        </form>
  
        <div className="signInWith">
          <p>Sign in with</p>
          <ul>
            <li>
              <img src={googleIcon} alt="google icon" />
              <span>Google</span>
            </li>
            <li>
              <img src={appleIcon} alt="apple icon" />
              <span>Apple</span>
            </li>
            <li>
              <img src={kakaoIcon} alt="kakao icon" />
              <span>Kakao</span>
            </li>
  
          </ul>
        </div>
      </div>
      
      <p>Don’t have account?<Link to="/tutors/sign-up"> Sign up</Link></p>
    </div>
  )
}