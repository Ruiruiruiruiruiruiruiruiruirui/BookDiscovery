import { createAction, createReducer } from 'redux-act'

//action creators
export const addToFavList = createAction('Update Fav List')

//fetches

//reducer
export const favourites = {
  [addToFavList]: (state, newFav) => ({
    ...state,
    favList: {
      ...state.favList,
      ...newFav
    }
  })
}

//initial state
export const favInitialState = {
  favList: [],
}

export default createReducer(favourites, favInitialState)