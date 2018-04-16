import { connect } from 'react-redux'
import Pure from './Pure'
import { withRouter } from 'react-router-dom'

import { updateFilter } from 'models/home'

const state = (state) => ({

})

const dispatch = dispatch => ({
  updateFilter: (filter) => dispatch(updateFilter(filter))
})

export default withRouter(connect(state, dispatch)(Pure))