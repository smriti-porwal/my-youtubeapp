import React from 'react'

const CardComponent = ({data}) => {
  const { snippet } = data;
  const { thumbnails, channelTitle, title} = snippet;
  return (
    <div className='flex flex-col w-72 m-7 p-1 shadow-lg'>
      <div>
      <img className='w-96 h-40' src={thumbnails?.default?.url} alt="video"></img>
      </div> 
      <div>
      <h1 className='font-bold'>{channelTitle}</h1>
      <h2 className='text-sm'>{title}</h2>
      </div>
    </div>
  )
}

export default CardComponent
