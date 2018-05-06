import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/es/integration/react'
import { createStore } from './src/util/createStore'

exports.replaceRouterComponent = ({ history }) => {
  const store = createStore()
  const ConnectedRouterWrapper = ({ children }) => (
    // <PersistGate persistor={persistor}>
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
    /* </PersistGate> */
  )

  return ConnectedRouterWrapper
}
