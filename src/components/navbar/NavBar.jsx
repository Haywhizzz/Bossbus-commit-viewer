import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavBar.scss'

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

const NavBar = () => {
  return (
    <nav className='NavBar'>
      <NavLink to='/' className='brand-name'>
        CommitViewer
      </NavLink>
      <div className='links'>
        {NavLinks.map(({ _id, text, path }) => (
          <NavLink
            className={`${path === '/about' ? 'pr-16' : ''} text-xl text-black`}
            key={_id}
            to={path}
          >
            {text}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default NavBar