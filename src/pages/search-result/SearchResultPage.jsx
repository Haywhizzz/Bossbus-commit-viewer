import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import Button from '../../components/buttons/Button'
import SearchIcon from '../../components/vectors/SearchIcon'

import { validateInput } from '../../utils/index'

import './Search.scss'

const SearchResultPage = ({ location, ...props }) => {
  const [searchQuery, setSearchQuery] = useState(location?.state?.search || '')
  const [commits, setCommits] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const getAllCommitts = async () => {
    try {
      const res = await axios.get(
        `https://api.github.com/repos/${searchQuery}/commits?per_page=10`
      )
      setLoading(true)
      setCommits(res.data)
    } catch (error) {
      setError(error.message, 'something went wrong while requesting commits')
    } finally {
      setLoading(false)
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

  if (error) return <h1>{error}</h1>

  return (
    <div className='SearchPage'>
      <nav className='flex h-32 items-center justify-center px-40 bg-gray3'>
        <NavLink
          className='brand-name text-dark1 text-3xl font-bold mr-9'
          to='/'
        >
          CommitViewer
        </NavLink>
        <form onSubmit={handleSubmit} className='form-container'>
          <div className='input-field'>
            <SearchIcon className='m-2 ml-4' />
            <input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              type='text'
              className='inputText flex-1 px-2 py-4 bg-gray2 rounded-lg text-xl'
              placeholder='Eg. facebook/react'
            />
          </div>
          <Button label='See commits 🚀' />
        </form>
      </nav>
      <p className='queryParams text-center my-9 text-4xl font-semibold text-dark2'>
        {searchQuery}
      </p>
      {loading || commits.length === 0 ? (
        <h2 className='loading'>Loading...</h2>
      ) : (
        <div className='search-result-container'>
          {commits.map((commit, index) => (
            <div key={index} className='result-container'>
              <div className='left'>
                <div className='left-side'>
                  <div className='circle'>
                    <img
                      src={commit.author.avatar_url}
                      alt=''
                      className='avatar'
                    />
                  </div>
                  <p>{commit.commit.author.name}</p>
                </div>
                <p className='commit-message'>{commit.commit.message}</p>
              </div>
              <p>23:30 28/04/2021</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchResultPage