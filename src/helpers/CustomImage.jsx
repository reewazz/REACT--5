import React from 'react'

const CustomImage = ({imageUrl}) => {
  return (
      <img className='h-[200px] w-[200px]' src={`http://localhost:5000/${imageUrl}`} alt="" />
  )
}

export default CustomImage