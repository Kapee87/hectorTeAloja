import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconArray } from '../../mockups&utils/iconArray';

function IconSpecs({ name, icon, value }) {
  const checkForFlip = iconArray.filter(icon => icon.name == name)[0].hasOwnProperty('flip')
  // console.log(checkForFlip);
  // console.log(iconArray[value]);
  return (
    <div className="hover:[&>span]:opacity-80 tooltip flex justify-center items-center" data-tip={name} >
      <span className='me-5'>{name} </span>
      <FontAwesomeIcon icon={icon} style={{ color: "#a6adbb", }} className={`${checkForFlip ? 'rotate-180' : ''}`} />
      {value ?? <span> {value}</span>}
    </div>
  )
}

export default IconSpecs