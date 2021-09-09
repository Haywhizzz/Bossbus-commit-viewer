import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import SearchIcon from '../../components/vectors/SearchIcon'
import { validateInput } from '../../utils/index'

import './Search.scss'
import FormField from '../../components/form-field/FormField'

const SearchResultPage = ({ location, ...props }) => {
  const [searchQuery, setSearchQuery] = useState(location?.state?.search || '')
  const [commits, setCommits] = useState([])
  const [error, setError] = useState('')
  // const [loading, setLoading] = useState(false)

  const getAllCommitts = async () => {
    try {
      const res = await axios.get(
        `https://api.github.com/repos/${searchQuery}/commits`
      )
      setCommits(res)
    } catch (error) {
      console.log({ error })
    }
  }

  console.log({ commits })

  const handleSubmit = async e => {
    e.preventDefault()
    const validate = await validateInput(searchQuery)

    if (validate === true) {
      getAllCommitts()
    } else {
      alert(
        'You need to include / to your query, check the placeholder text for guide'
      )
    }
  }

  useEffect(() => {
    getAllCommitts()
  }, [])

  return (
    <div className='SearchPage'>
      <nav className='flex h-32 items-center justify-center px-40 bg-gray3'>
        <NavLink
          className='brand-name text-dark1 text-3xl font-bold mr-9'
          to='/'
        >
          CommitViewer
        </NavLink>
        {/* <form onSubmit={handleSubmit} className='flex w-4/6 items-center'>
          <div className='flex flex-1 justify-center items-center bg-gray2 rounded-lg'>
            <SearchIcon className='m-2 ml-4' />
            <input
              type='text'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className='flex-1 px-2 py-4 bg-gray2 rounded-lg text-xl'
              placeholder='Eg. facebook/react'
            />
          </div>
          <button
            type='submit'
            className='bg-orange1 text-xl font-semibold text-white py-4 px-6 ml-4 rounded-lg'
          >
            See commits 🚀
          </button>
        </form> */}
        <FormField />
      </nav>
      <p className='queryParams text-center my-9 text-4xl font-semibold text-dark2'>
        {searchQuery}
      </p>
      <div className='search-result-container'>
        <div className='result-container'>
          <div className='left'>
            <div className='left-side'>
              <div className='circle' />
              <p>gaearon</p>
            </div>
            <p>Log all errors to console.error by default (#21130)</p>
          </div>
          <p>23:30 28/04/2021</p>
        </div>

        <div className='result-container'>
          <div className='left'>
            <div className='left-side'>
              <div className='circle' />
              <p>gaearon</p>
            </div>
            <p>Log all errors to console.error by default (#21130)</p>
          </div>
          <p>23:30 28/04/2021</p>
        </div>

        <div className='result-container'>
          <div className='left'>
            <div className='left-side'>
              <div className='circle' />
              <p>gaearon</p>
            </div>
            <p>Log all errors to console.error by default (#21130)</p>
          </div>
          <p>23:30 28/04/2021</p>
        </div>

        <div className='result-container'>
          <div className='left'>
            <div className='left-side'>
              <div className='circle' />
              <p>gaearon</p>
            </div>
            <p>Log all errors to console.error by default (#21130)</p>
          </div>
          <p>23:30 28/04/2021</p>
        </div>
      </div>
    </div>
  )
}

export default SearchResultPage