import { connect } from 'react-redux'
import Pure from './Pure'
import { withRouter } from 'react-router-dom'
import { includes, keyBy } from 'lodash'

import { addToWishList } from 'models/wishlist'
import { addToFavList } from 'models/favourites'

const state = state => {

  const listings =  Object.keys(state.home.bookList).map(x => state.home.bookList[x])

  let filteredListings = []
  const searchParams = state.home.filter.toLowerCase()

  if(searchParams)
    filteredListings = listings.filter(x =>
      includes(x.author.toLowerCase(), searchParams) ||
      includes(x.genre.toLowerCase(), searchParams) ||
      includes(x.name.toLowerCase(), searchParams))
  else
    filteredListings = listings

  return {
    listings: filteredListings,
    listingType: state.layout.view
  }
}

const dispatch = dispatch => ({
  addToWishlist: (item) => {
    dispatch(addToWishList(keyBy([].concat(item), item => item.key)))
  },
  addToFav: (item) => {
    dispatch(addToFavList(keyBy([].concat(item), item => item.key)))
  }
})

export default withRouter(connect(state, dispatch)(Pure))