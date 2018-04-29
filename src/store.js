import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import home, { homeSagaWatcher } from 'models/home'
import favourites from 'models/favourites'
import wishlist from 'models/wishlist'
import layout from 'models/layout'
import stopwatch from 'models/stopwatch'

const rootReducer = combineReducers({
  router: routerReducer,
  home,
  favourites,
  wishlist,
  layout,
  stopwatch
})

const reduxRouterMiddleware = routerMiddleware(history)

const sagaMiddleware = createSagaMiddleware()

function * rootSaga () {
  yield [
    // add MODEL_NAME
    ...homeSagaWatcher
  ]
}

const rootMiddleware = composeWithDevTools(applyMiddleware(
  reduxRouterMiddleware,
  sagaMiddleware
))

export const appDefaultState = {}

const store = createStore(rootReducer, appDefaultState, rootMiddleware)

sagaMiddleware.run(rootSaga)

export default store