import React from 'react'

import './Button.scss'

const Button = ({ label }) => {
  return (
    <button
      type='submit'
      className='bg-orange1 text-xl font-semibold text-white py-4 px-6 ml-4 rounded-lg'
    >
      {label}
    </button>
  )
}

export default Button
