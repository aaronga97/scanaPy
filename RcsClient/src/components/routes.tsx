import * as React from 'react'
import App from './App'
import TestAPI from './TestAPI'
import Login from './Login'

const routes = [
  { path: '/', action: () => <App />},
  { path: '/test', action: () => <TestAPI />},
  { path: '/login', action: () => <Login />},

  { path: '/otherThing', action: () => <p>otherThing</p> },
  { path: '/tasks/:id', action: () => <p>Specific task</p> }
]

export default routes