import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
// import { PersistGate } from 'redux-persist/es/integration/react'
import { createStore } from './src/util/createStore'

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const store = createStore()

  const ConnectedBody = () => (
    // <PersistGate persistor={persistor}>
    <Provider store={store}>{bodyComponent}</Provider>
    // </PersistGate>
  )
  replaceBodyHTMLString(renderToString(<ConnectedBody />))
}
