import { connect } from 'react-redux'
import Pure from './Pure'
import { withRouter } from 'react-router-dom'

const data = {
  "books": {
    "b1": {
      "key": "b1",
      "name": "Bourne Identity",
      "author": "auhor name",
      "cover-img": "cover.img",
      "genre": "mystery",
      "rating": 3.5,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
    },
    "b2": {
      "key": "b2",
      "name": "Harry Potter",
      "author": "auhor name",
      "cover-img": "cover.img",
      "genre": "mystery",
      "rating": 3.5,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
    },
    "b3": {
      "key": "b3",
      "name": "Alice In Wonderland",
      "author": "auhor name",
      "cover-img": "cover.img",
      "genre": "mystery",
      "rating": 3.5,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
    },
    "b4": {
      "key": "b1",
      "name": "Bourne Identity",
      "author": "auhor name",
      "cover-img": "cover.img",
      "genre": "mystery",
      "rating": 3.5,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
    },
    "b5": {
      "key": "b2",
      "name": "Harry Potter",
      "author": "auhor name",
      "cover-img": "cover.img",
      "genre": "mystery",
      "rating": 3.5,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
    },
    "b6": {
      "key": "b3",
      "name": "Alice In Wonderland",
      "author": "auhor name",
      "cover-img": "cover.img",
      "genre": "mystery",
      "rating": 3.5,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
    }
  }
}

const state = state => ({
  listings: Object.keys(data.books).map(x => data.books[x])
})

const dispatch = dispatch => ({

})

export default withRouter(connect(state, dispatch)(Pure))