import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function IconSpecs({ name, icon, value }) {
  // console.log(name, icon);
  return (
    <div className="hover:[&>span]:opacity-80 tooltip" data-tip={name} >
      <span className='me-5 lg:hidden'>{name} </span>
      <FontAwesomeIcon icon={icon} style={{ color: "#a6adbb", }} />
      {value ?? <span> {value}</span>}
    </div>
  )
}

export default IconSpecs