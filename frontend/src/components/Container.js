import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from 'components/Header'

import Home from 'pages/Home'
import Login from '../pages/Login'


const Container = () => {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Container
