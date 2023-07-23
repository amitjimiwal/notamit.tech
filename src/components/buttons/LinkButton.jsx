import React from 'react'
import Goto from '../icons/Goto'
const LinkButton = ({name,link}) => {
  return (
      <div className='cursor-pointer mt-5'>
      <a href="" target="_blank" className='text-white font-bold bg-button p-3 rounded-xl' rel='noreferrer'>
        <Goto /> Github
      </a>
  </div>
  )
}

export default LinkButton
