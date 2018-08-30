// import * as React from 'react'
// import {render} from 'react-dom'
// import App from './components/App'

// const rootEl = document.getElementById('root')

// render(
//     <App/>,
//     rootEl
// )

import * as ReactDOM from 'react-dom'
import history from './components/history'
import router from './components/router'
import routes from './components/routes'

const container = document.getElementById('root')
function renderComponent(component) {
  ReactDOM.render(component, container)
}
function render(location) {
  router.resolve(routes, location)
    .then(renderComponent)
    .catch(error => router.resolve(routes, { ...location, error })
    .then(renderComponent))
}
render(history.location) // render the current URL
history.listen(render)               // render subsequent URLs