import { combineReducers, createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import home, { homeSagaWatcher } from 'models/home'

const rootReducer = combineReducers({
  router: routerReducer,
  home
})

const reduxRouterMiddleware = routerMiddleware(history)

const rootMiddleware = composeWithDevTools(applyMiddleware(
  reduxRouterMiddleware
))

export const appDefaultState = {}

const store = createStore(rootReducer, appDefaultState, rootMiddleware)

export default store