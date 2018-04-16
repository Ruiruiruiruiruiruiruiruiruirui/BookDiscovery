import { expect } from 'chai';

import favourites, { addToFavList, favInitialState } from 'models/favourites'

describe('favourite reducer', () => {
  it('handles add to fav', () => {

    const payload = {
      b1: {
        key: 'b1',
        name: 'Bourne Identity',
        author: 'auhor name',
        'cover-img': 'cover.img',
        genre: 'mystery',
        rating: 3.5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...'
      }
    }

    const nextState = JSON.stringify(favourites(favInitialState, addToFavList(payload)))

    expect(nextState).to.equal(JSON.stringify({
      favList: {
        b1: {
          key: 'b1',
          name: 'Bourne Identity',
          author: 'auhor name',
          'cover-img': 'cover.img',
          genre: 'mystery',
          rating: 3.5,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...'
        }
      }
    }))
  })
})