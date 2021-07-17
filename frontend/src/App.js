import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import user from './reducers/user'
import ui from 'reducers/ui'

import Container from './components/Container'


const reducer = combineReducers({
  user: user.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}
