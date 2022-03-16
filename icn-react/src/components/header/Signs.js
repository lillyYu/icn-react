import { Link } from "react-router-dom"

export const Signs = () => {
  return(
    <div className="signs">
      <Link to="/sign-up">Sign up</Link>
      <Link to="/sign-in">Sign in</Link>
    </div>
  )
}