import { connect } from 'react-redux'
import Pure from './Pure'
import { withRouter } from 'react-router-dom'

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
    }
  ]
})

const dispatch = dispatch => ({

})

export default withRouter(connect(state, dispatch)(Pure))