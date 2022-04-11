import React from 'react'

import classIncludes1 from 'commons/images/class-includes-icon1.svg';
import classIncludes2 from 'commons/images/class-includes-icon2.svg';
import classIncludes3 from 'commons/images/class-includes-icon3.svg';
import classIncludes4 from 'commons/images/class-includes-icon4.svg';
import classIncludes5 from 'commons/images/class-includes-icon5.svg';

const ClassIncludes = () => {
  return (
    <div className='classIncludes'>
      <h3>This class includes:</h3>
      <ul>
        <li>
          <img src={classIncludes1} alt="video icon" />
          <span>21 hours on-demand videos</span>
        </li>
        <li>
          <img src={classIncludes2} alt="documnet icon" />
          <span>10 articles</span>
        </li>
        <li>
          <img src={classIncludes3} alt="folder icon" />
          <span>3 dowloadable folders</span>
        </li>
        <li>
          <img src={classIncludes4} alt="phone icon" />
          <span>Available on mobile</span>
        </li>
        <li>
          <img src={classIncludes5} alt="trophy icon" />
          <span>Certificate of completion</span>
        </li>
      </ul>
    </div>
  )
}

export default ClassIncludes