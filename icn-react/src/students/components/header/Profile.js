import React from 'react'
import profileImage from 'commons/images/profile-sample.jpg';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className='profileStyling'>
      <Link to="/">Buy now</Link>
      <ul>
        <li>
          <figure>
            <img src={profileImage} alt="profile sample" />
          </figure>
        </li>
        <li>Angelia</li>
        <li>
          <i className='bx bx-chevron-down'></i>
        </li>
      </ul>
    </div>
  )
}

export default Profile