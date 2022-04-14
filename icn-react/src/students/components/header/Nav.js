import { NavLink } from "react-router-dom"

export const Nav = () => {
  return(
    <nav>
      <NavLink to="/students" activeclassname="active">Homepage</NavLink>
      <NavLink to="/students/1:1-class" activeclassname="active">1:1 Class</NavLink>
      <NavLink to="/students/tutor" activeclassname="active">Tutor</NavLink>
      <NavLink to="/students/content" activeclassname="active">Content</NavLink>
      <NavLink to="/students/career" activeclassname="active">Career</NavLink>
    </nav>
  )
}