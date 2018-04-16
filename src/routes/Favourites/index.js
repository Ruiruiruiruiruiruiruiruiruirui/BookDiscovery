import { connect } from 'react-redux'
import Pure from './Pure'
import { withRouter } from 'react-router-dom'
import { includes } from 'lodash'

const state = state => {

  const listings =  Object.keys(state.favourites.favList).map(x => state.favourites.favList[x])

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
    listings: filteredListings
  }
}

const dispatch = dispatch => ({

})

export default withRouter(connect(state, dispatch)(Pure))