import { createAction, createReducer } from 'redux-act'

//action creators
export const addToWishList = createAction('Update Wish List')

//fetches

//reducer
export const wishlist = {
  [addToWishList]: (state, newWish) => ({
    ...state,
    wishList: {
      ...state.wishList,
      ...newWish
    }
  })
}

//initial state
export const wishInitialState = {
  wishList: [],
}

export default createReducer(wishlist, wishInitialState)