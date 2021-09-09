import React from 'react'
import Button from '../buttons/Button'

import SearchIcon from '../vectors/SearchIcon'

import './FormField.scss'

const FormField = () => {
  return (
    <form className='form-container'>
      <div className='input-field'>
        <SearchIcon className='m-2 ml-4' />
        <input
          type='text'
          className='inputText flex-1 px-2 py-4 bg-gray2 rounded-lg text-xl'
          placeholder='Eg. facebook/react'
        />
      </div>
      <Button label='See commits 🚀' />
    </form>
  )
}

export default FormField