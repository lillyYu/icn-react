import { NavLink } from "react-router-dom"

export const Nav = () => {
  return(
    <nav>
      <NavLink to="/whatIs" activeClassName="active">What is ICN</NavLink>
      <NavLink to="/howTo" activeClassName="active">How to</NavLink>
      <NavLink to="/review" activeClassName="active">Review</NavLink>
      <NavLink to="/class" activeClassName="active">Class</NavLink>
    </nav>
  )
}