import { NavLink } from "react-router-dom"

export const Nav = () => {
  return(
    <nav>
      <NavLink to="/students/whatIs" activeclassname="active">What is ICN</NavLink>
      <NavLink to="/students/howTo" activeclassname="active">How to</NavLink>
      <NavLink to="/students/review" activeclassname="active">Review</NavLink>
      <NavLink to="/students/class" activeclassname="active">Class</NavLink>
    </nav>
  )
}