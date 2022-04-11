import { Link } from "react-router-dom"

export const Signs = () => {
  return(
    <div className="signs">
      <Link to="/students/sign-in">Sign in</Link>
      <Link to="/students/sign-up">Sign up</Link>
    </div>
  )
}