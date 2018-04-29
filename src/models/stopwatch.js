import { createAction, createReducer } from 'redux-act'

//action creators
export const startTimer = createAction('starting timer')

//fetches

//reducer
export const stopwatch = {
  [startTimer]: (state) => ({
    ...state,
    startTime: new Date().getTime()
  })
}

//initial state
export const stopwatchInitialState = {

}

export default createReducer(stopwatch, stopwatchInitialState)