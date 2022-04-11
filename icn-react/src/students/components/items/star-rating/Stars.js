import React from 'react'

function Stars ({rate}) {
  if(rate === 5) {
    return (
      <ul className='stars'>
        <li><i className='bx bxs-star'></i></li>
        <li><i className='bx bxs-star'></i></li>
        <li><i className='bx bxs-star'></i></li>
        <li><i className='bx bxs-star'></i></li>
        <li><i className='bx bxs-star'></i></li>
      </ul>
    )
  } else if( 4 < rate < 5){
    return (
      <ul className='stars'>
        <li><i className='bx bxs-star'></i></li>
        <li><i className='bx bxs-star'></i></li>
        <li><i className='bx bxs-star'></i></li>
        <li><i className='bx bxs-star'></i></li>
        <li><i className='bx bxs-star-half'></i></li>
      </ul>
    )
  } else if(rate === 4) {
    return(
      <ul className='stars'>
        <li><i className='bx bxs-star'></i></li>
        <li><i className='bx bxs-star'></i></li>
        <li><i className='bx bxs-star'></i></li>
        <li><i className='bx bxs-star'></i></li>
        <li><i class='bx bx-star'></i></li>
      </ul>
    )
  } else if( 3 < rate < 4 ) {
    return(
      <ul className='stars'>
        <li><i className='bx bxs-star'></i></li>
        <li><i className='bx bxs-star'></i></li>
        <li><i className='bx bxs-star'></i></li>
        <li><i className='bx bxs-star-half'></i></li>
        <li><i class='bx bx-star'></i></li>
      </ul>
    )
  } else if (rate === 3) {
    return(
      <ul className='stars'>
        <li><i className='bx bxs-star'></i></li>
        <li><i className='bx bxs-star'></i></li>
        <li><i className='bx bxs-star'></i></li>
        <li><i class='bx bx-star'></i></li>
        <li><i class='bx bx-star'></i></li>
      </ul>
    )
  } else if (2 < rate < 3) {
    return(
      <ul className='stars'>
        <li><i className='bx bxs-star'></i></li>
        <li><i className='bx bxs-star'></i></li>
        <li><i className='bx bxs-star-half'></i></li>
        <li><i class='bx bx-star'></i></li>
        <li><i class='bx bx-star'></i></li>
      </ul>
    )
  } else if (rate === 2) {
    return(
      <ul className='stars'>
        <li><i className='bx bxs-star'></i></li>
        <li><i className='bx bxs-star'></i></li>
        <li><i class='bx bx-star'></i></li>
        <li><i class='bx bx-star'></i></li>
        <li><i class='bx bx-star'></i></li>
      </ul>
    )
  } else if (1 < rate < 2) {
    return(
      <ul className='stars'>
        <li><i className='bx bxs-star'></i></li>
        <li><i className='bx bxs-star-half'></i></li>
        <li><i class='bx bx-star'></i></li>
        <li><i class='bx bx-star'></i></li>
        <li><i class='bx bx-star'></i></li>
      </ul>
    )
  } else {
    return(
      <ul className='stars'>
        <li><i className='bx bxs-star'></i></li>
        <li><i class='bx bx-star'></i></li>
        <li><i class='bx bx-star'></i></li>
        <li><i class='bx bx-star'></i></li>
        <li><i class='bx bx-star'></i></li>
      </ul>
    )
  }
}

export default Stars