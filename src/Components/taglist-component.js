import React from 'react'
import Tag from './tag-component'
import { TAGLIST } from '../Constants'

const Taglist = () => {
  return (
    <div className='ml-7'>
       {TAGLIST.map(tagname=> <Tag tagname={tagname} key={tagname}/>)} 
    </div>
  )
}

export default Taglist
