import { connect } from 'react-redux'
import Pure from './Pure'
import { withRouter } from 'react-router-dom'

import { toggleView } from "models/layout";

const state = (state) => ({

})

const dispatch = dispatch => ({
  toggleListView: () => dispatch(toggleView('list')),
  toggleGridView: () => dispatch(toggleView('grid')),
})

export default withRouter(connect(state, dispatch)(Pure))