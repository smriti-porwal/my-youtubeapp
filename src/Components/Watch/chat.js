import React from 'react'

const Chat = ({message}) => {
  return (
    <div>
      <h1 className='bg-green-200 rounded-lg justify-start m-1 p-1'>{message}</h1>
    </div>
  )
}

export default Chat;
