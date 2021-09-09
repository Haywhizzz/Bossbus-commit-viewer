import React, { useState } from 'react'

import NavBar from '../../components/navbar/NavBar'
import Button from '../../components/buttons/Button'
import SearchIcon from '../../components/vectors/SearchIcon'

import { validateInput } from '../../utils/index'

import './HomePage.scss'

const SuggestedRepos = [
  {
    id: 1,
    repo: 'django/django'
  },
  {
    id: 2,
    repo: 'microsoft/vscode'
  },
  {
    id: 3,
    repo: 'jezen/is-thirteen'
  },
  {
    id: 4,
    repo: 'benawad/dogehouse'
  }
]

const HomePage = ({ history, ...props }) => {
  const [search, setSearch] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const validate = await validateInput(search)

    if (validate === true) {
      history.push({
        pathname: '/search-result',
        search: search,
        state: { search }
      })
    } else {
      alert(
        'You need to include / to your query, check the placeholder text for guide'
      )
    }
  }

  console.log({ props })

  return (
    <div className='HomePage'>
      <NavBar />
      {/* <div className='hero text-center my-14'>
        <h1 className='heading1 max-w-2xl mx-auto text-8xl font-semibold text-dark1 leading-tight'>
          Discover the world of code
        </h1>
        <p className='desc'>
          Explore open source projects from GitHub, and read their commit
          history to see the story of how they were built.
        </p>
      </div> */}
      {/* <div className='form-field-container max-w-5xl mx-auto'>
        <form onSubmit={handleSubmit} className='form-container'>
          <div className='input-field'>
            <SearchIcon className='m-2 ml-4' />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              type='text'
              className='inputText flex-1 px-2 py-4 bg-gray2 rounded-lg text-xl'
              placeholder='Eg. facebook/react'
            />
          </div>
          <Button label='See commits 🚀' />
        </form>
      </div> */}
      {/* <p className='suggestion text-center my-7 text-gray1 text-base'>
        Or pick one of these suggested repos
      </p>
      <div className='suggested-links max-w-5xl text-center mx-auto'>
        {SuggestedRepos.map(({ id, repo }) => (
          <span
            key={id}
            className='links bg-dark2 py-2 px-4 rounded-lg text-base mx-2.5 text-white'
          >
            {repo}
          </span>
        ))}
      </div> */}
    </div>
  )
}

export default HomePage
