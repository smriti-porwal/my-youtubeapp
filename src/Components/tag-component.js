import React from 'react'

const Tag = ({tagname}) => {
  return (
    <span>
      <button className='bg-gray-100 m-1 p-2 rounded-md text-sm'>{tagname}</button>
    </span>
  )
}

export default Tag
