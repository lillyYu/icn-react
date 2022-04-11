import { Link } from "react-router-dom"

export const Signs = () => {
  return(
    <div className="signs">
      <Link to="/tutors/sign-in">Sign in</Link>
      <Link to="/tutors/sign-up">Sign up</Link>
    </div>
  )
}