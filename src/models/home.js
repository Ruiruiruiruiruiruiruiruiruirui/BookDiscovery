import { createAction, createReducer } from 'redux-act'
import { createSagaWatcher } from 'sagas'
import { put, call } from 'redux-saga/effects'

import bookList from 'bookList.json'

//action creators
export const updateFilter = createAction('Update Filter')

export const updateBookListSaga = createAction('Update Book List Saga')
export const updateBookList = createAction('Update Book List')

//fetches
function fetchBookList () {
  return bookList
}

//sagas
export const sagas = {
  [updateBookListSaga]: function* () {
    const data = yield call(fetchBookList)
    yield put(updateBookList(data.books))
  },
}

export const homeSagaWatcher = createSagaWatcher(sagas)

//reducer
export const home = {
  [updateFilter]: (state, filter) => ({
    ...state,
    filter
  }),
  [updateBookList]: (state, bookList) => ({
    ...state,
    bookList
  })
}

//initial state
export const homeInitialState = {
  bookList: [],
  filter: ''
}

export default createReducer(home, homeInitialState)