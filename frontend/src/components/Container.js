import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Secret from '../pages/Secret'

const Container = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/secret">
          <Secret/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Container
