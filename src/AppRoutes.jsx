import React from 'react'
import { Route, Switch } from 'react-router'

import HomePage from './pages/home'

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
    </Switch>
  )
}

export default AppRoutes
