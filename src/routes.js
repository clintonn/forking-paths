import React from 'react'
import { Route } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'

export default (
  <App>
    <Route path="/home" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
  </App>
)
