import { NavLink } from "react-router-dom"

export const Nav = () => {
  return(
    <nav>
      <NavLink to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/about-us" activeClassName="active">About-us</NavLink>
      <NavLink to="/class" activeClassName="active">Class</NavLink>
      <NavLink to="/tutor" activeClassName="active">Tutor</NavLink>
      <NavLink to="/career" activeClassName="active">Career</NavLink>
      <NavLink to="/faq" activeClassName="active">FAQ</NavLink>
    </nav>
  )
}