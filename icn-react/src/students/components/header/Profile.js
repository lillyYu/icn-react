import React, { useState } from 'react'
import profileImage from 'commons/images/profile-sample.jpg';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [modalOn, setModalOn] = useState(false);
  const [arrowToggle, setArrowToggle] = useState(false);

  const handleModalToggle =() => {
    setModalOn(!modalOn)
    setArrowToggle(!arrowToggle)
  }

  return (
    <div className='profileStyling'>
      <Link to="/">Buy now</Link>
      <ul onClick={handleModalToggle}>
        <li>
          <figure>
            <img src={profileImage} alt="profile sample" />
          </figure>
        </li>
        <li>Angelia</li>
        <li className={arrowToggle ? "active" : null}>
          <i className='bx bx-chevron-down'></i>
        </li>
      </ul>

      {
        modalOn &&
          <div className='profileModal'>
            <div>
              <header>
                Learning
              </header>
              <Link to="/">My class</Link>
              <Link to="/">Review</Link>
            </div>

            <div>
              <header>
                Account
              </header>
              <Link to="/">My account</Link>
              <Link to="/">Point</Link>
              <Link to="/">Notification</Link>
            </div>

            <Link to="/">Log out</Link>
          </div>
      }
      
    </div>
  )
}

export default Profile