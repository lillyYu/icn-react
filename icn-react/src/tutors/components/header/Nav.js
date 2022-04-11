import { NavLink } from "react-router-dom"

export const Nav = () => {
  return(
    <nav>
      <NavLink to="/tutors/about-us" activeclassname="active">About us</NavLink>
      <NavLink to="/tutors/faq" activeclassname="active">FAQ</NavLink>
      <NavLink to="/tutors/privacy-policy" activeclassname="active">Privacy Policy</NavLink>
    </nav>
  )
}