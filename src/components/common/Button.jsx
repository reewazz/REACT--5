import React from 'react'

const Button = ({value,onClick}) => {
  return (
    <button onClick={onClick} className='bg-orange-400 text-white h-auto w-auto px-4 py-2 rounded-md cursor-pointer hover:bg-orange-600'>{value}</button>
  )
}

export default Button