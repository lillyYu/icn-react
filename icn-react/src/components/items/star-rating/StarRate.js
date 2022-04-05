import React from 'react'
import Stars from './Stars'

const StarRate = ({rate, rateNum, id, color}) => {
  return (
    <div className="starRate">
      <Stars rate={rate} id={id} />

      <span className={color && "color"}>{rate}</span>
      {rateNum && <span>({rateNum} rating)</span>}
    </div>
  )
}

export default StarRate