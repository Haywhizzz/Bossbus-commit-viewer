import React from 'react'
import { Route, Switch } from 'react-router'

import HomePage from './pages/home'
import SearchResultPage from './pages/search-result/SearchResultPage'


const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/search-result' component={SearchResultPage} />
    </Switch>
  )
}

export default AppRoutes
