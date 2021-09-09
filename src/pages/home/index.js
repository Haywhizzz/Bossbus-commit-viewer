import React from 'react'

import { NavLink } from 'react-router-dom'
import SearchIcon from '../../components/vectors/SearchIcon'

const NavLinks = [
  {
    _id: 'dker13',
    text: 'About',
    path: '/about'
  },
  {
    _id: 'fj4243',
    text: 'Contact',
    path: '/contact'
  }
]

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

const HomePage = () => {
  return (
    <div className='HomePage'>
      <nav className='h-32 flex items-center px-40'>
        <NavLink to='/' className='text-dark1 font-bold text-3xl'>
          CommitViewer
        </NavLink>
        <div className='flex-1' />
        {NavLinks.map(({ _id, text, path }) => (
          <NavLink
            className={`${path === '/about' ? 'pr-16' : ''} text-xl text-black`}
            key={_id}
            to={path}
          >
            {text}
          </NavLink>
        ))}
      </nav>
      <div className='text-center my-14'>
        <h1 className='max-w-2xl mx-auto text-8xl font-semibold text-dark1 leading-tight'>
          Discover the world of code
        </h1>
        <p className='text-gray1 text-2xl max-w-xl mx-auto mt-4'>
          Explore open source projects from GitHub, and read their commit
          history to see the story of how they were built.
        </p>
      </div>
      <form className='flex flex-1 items-center max-w-5xl mx-auto'>
        <div className='flex flex-1 justify-center items-center bg-gray2 rounded-lg'>
          <SearchIcon className='m-2 ml-4' />
          <input
            type='search'
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
      </form>
      <p className='text-center my-7 text-gray1 text-base'>
        Or pick one of these suggested repos
      </p>
      <div className='max-w-5xl text-center mx-auto'>
        {SuggestedRepos.map(({ repo }) => (
          <span className='bg-dark2 py-2 px-4 rounded-lg text-base mx-2.5 text-white'>
            {repo}
          </span>
        ))}
      </div>
    </div>
  )
}

export default HomePage