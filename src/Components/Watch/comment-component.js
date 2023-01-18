import React from 'react'

const CommentComponent = ({comments}) => {
    const {name, comment} = comments;
  return (
    <div className='p-3 my-2 bg-gray-100 rounded-sm'>
      <h1><span className='font-bold'>{name}:</span> {comment}</h1>
    </div>
  )
}

export default CommentComponent
