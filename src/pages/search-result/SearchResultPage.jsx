/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import Button from '../../components/buttons/Button'
import SearchIcon from '../../components/search/SearchIcon'

import { formattedDate, validateInput } from '../../utils/index'

import './Search.scss'

const SearchResultPage = ({ location, ...props }) => {
  const [searchQuery, setSearchQuery] = useState(location?.state?.search || '')
  const [commits, setCommits] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const getAllCommits = async () => {
    try {
      const res = await axios.get(
        `https://api.github.com/repos/${searchQuery}/commits?per_page=10&sort=updated&direction=asc`
      )
      setLoading(true)
      setCommits(res.data)
    } catch (error) {
      setError(error.message, 'something went wrong while requesting commits')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const validate = await validateInput(searchQuery)

    if (validate === true) {
      getAllCommits()
    } else {
      alert(
        'You need to include / to your query, check the placeholder text for guide'
      )
    }
  }

  useEffect(() => {
    getAllCommits()
  }, [])

  if (error) {
    return (
      <h2 style={{ color: 'red', textAlign: 'center', marginTop: '2rem' }}>
        {error}
      </h2>
    )
  }

  return (
    <div className='SearchPage'>
      <nav>
        <NavLink
          className='brand-name text-dark1 text-3xl font-bold mr-9'
          to='/'
        >
          CommitViewer
        </NavLink>
        <form onSubmit={handleSubmit} className='form-container search-result'>
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
      <p className='queryParams'>{searchQuery}</p>
      {loading || commits.length === 0 ? (
        <h2 className='loading'>Loading...</h2>
      ) : (
        <div className='search-result-container'>
          {commits.map((commit, index) => (
            <div key={index} className='result-container'>
              <div className='author-info'>
                <div className='circle'>
                  <img
                    src={commit.author.avatar_url}
                    alt=''
                    className='avatar'
                  />
                </div>
                <p>{commit.commit.author.name}</p>
              </div>
              <p className='commit-message'>
                {commit.commit.message.split(')')[0]})
              </p>
              <p className='date'>
                {formattedDate(commit.commit.committer.date)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchResultPage