import { NavLink } from "react-router-dom"

export const Nav = () => {
  return(
    <nav>
      <NavLink to="/whatIs" activeclassname="active">What is ICN</NavLink>
      <NavLink to="/howTo" activeclassname="active">How to</NavLink>
      <NavLink to="/review" activeclassname="active">Review</NavLink>
      <NavLink to="/class" activeclassname="active">Class</NavLink>
    </nav>
  )
}