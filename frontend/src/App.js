import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './components/Login'
import Main from './components/Main'
import Welcome from './components/Welcome'

import user from './reducers/user'
import thoughts from './reducers/thoughts'
import Signup from 'components/Signup'

const reducer = combineReducers({ 
  user: user.reducer,
  thoughts: thoughts.reducer
})
const store = configureStore({ reducer })

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/welcome" component={Welcome} />
        </Switch>
      </Provider>
    </BrowserRouter>
  )
}