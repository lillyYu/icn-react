import { Link } from "react-router-dom"

const ClassRegister = () => {
  return (
    <div className='classRegister'>
      <div className='selectProgram'>
        <i class='bx bx-calendar-plus'></i>
        <p>Select a program to register a class</p>
        <Link to="/students/class-register">Select program</Link>
      </div>
    </div>
  )
}

export default ClassRegister