import { connect } from 'react-redux'
import Pure from './Pure'
import { withRouter } from 'react-router-dom'

const state = (state, {links, location}) => ({
  selected: location.pathname,
  links
})

const dispatch = dispatch => ({

})

export default withRouter(connect(state, dispatch)(Pure))