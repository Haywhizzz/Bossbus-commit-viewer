
import React, { useState } from 'react'
import FormField from '../../components/form-field/FormField'

import NavBar from '../../components/navbar/NavBar'
import SearchIcon from '../../components/vectors/SearchIcon'

import { validateInput } from '../../utils/index'

import './HomePage.scss'

const SuggestedRepos = [
  {
    repo: 'django/django'
  },
  {
    repo: 'microsoft/vscode'
  },
  {
    repo: 'jezen/is-thirteen'
  },
  {
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
      <div className='hero text-center my-14'>
        <h1 className='heading1 max-w-2xl mx-auto text-8xl font-semibold text-dark1 leading-tight'>
          Discover the world of code
        </h1>
        <p className='desc'>
          Explore open source projects from GitHub, and read their commit
          history to see the story of how they were built.
        </p>
      </div>
      <div className='form-field-container max-w-5xl mx-auto'>
        <FormField />
      </div>
      <p className='suggestion text-center my-7 text-gray1 text-base'>
        Or pick one of these suggested repos
      </p>
      <div className='suggested-links max-w-5xl text-center mx-auto'>
        {SuggestedRepos.map(({ repo }) => (
          <span className='links bg-dark2 py-2 px-4 rounded-lg text-base mx-2.5 text-white'>
            {repo}
          </span>
        ))}
      </div>
    </div>
  )
}

export default HomePage
