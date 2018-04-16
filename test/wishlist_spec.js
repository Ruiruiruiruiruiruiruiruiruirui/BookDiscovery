import { expect } from 'chai';

import wishlist, { addToWishList, wishInitialState } from 'models/wishlist'

describe('wishlist reducer', () => {
  it('handles add to wishlist', () => {

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

    const nextState = JSON.stringify(wishlist(wishInitialState, addToWishList(payload)))

    expect(nextState).to.equal(JSON.stringify({
      wishList: {
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