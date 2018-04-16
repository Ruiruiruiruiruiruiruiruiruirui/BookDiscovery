import { createAction, createReducer } from 'redux-act'

//action creators
export const toggleView = createAction('Toggle View')

//fetches

//reducer
export const layout = {
  [toggleView]: (state, view) => ({
    ...state,
    view
  })
}

//initial state
export const layoutInitialState = {
  view: 'grid',
}

export default createReducer(layout, layoutInitialState)