import { Link } from "react-router-dom"

export const Nav = () => {
  return(
    <nav>
      <Link to="/" className="active">Home</Link>
      <Link to="/about-us">About-us</Link>
      <Link to="/class">Class</Link>
      <Link to="/tutor">Tutor</Link>
      <Link to="/career">Career</Link>
      <Link to="/faq">FAQ</Link>
    </nav>
  )
}