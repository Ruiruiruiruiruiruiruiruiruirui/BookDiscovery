import { connect } from 'react-redux'
import Pure from './Pure'
import { withRouter } from 'react-router-dom'

import { updateBookListSaga } from 'models/home'

const state = state => ({
  links: [
    {
      label: 'All Books',
      linkTo: '/'
    },
    {
      label: 'Favourites',
      linkTo: '/Favourites'
    },
    {
      label: 'Wishlist',
      linkTo: '/Wishlist'
    },
    {
      label: 'Stopwatch',
      linkTo: '/Stopwatch'
    }
  ]
})

const dispatch = dispatch => ({
  updateBookList: () => dispatch(updateBookListSaga())
})

export default withRouter(connect(state, dispatch)(Pure))