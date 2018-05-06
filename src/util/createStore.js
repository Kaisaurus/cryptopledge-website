import {
  createStore as reduxCreateStore,
  combineReducers,
  compose,
  applyMiddleware
} from 'redux'
// import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducers from '../reducers/index'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import promise from 'redux-promise-middleware'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = compose(applyMiddleware(promise(), thunk, createLogger()))

// const config = { key: 'root', storage }
// const reducer = persistCombineReducers(config, reducers)
// const initialState = { count: 0 }

export const createStore = () =>
  reduxCreateStore(combineReducers(reducers), undefined, middleware)
// export const persistor = persistStore(createStore)
// persistor.purge() // purge store for testing
