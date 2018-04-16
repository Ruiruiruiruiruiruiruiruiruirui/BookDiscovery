import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
  display: ${props => props.listingType === 'grid' ? 'inline-block' : 'flex'};
  width: ${props => props.listingType === 'grid' ? '20%' : '98%'};
  margin: 1%;
  border: 1px solid black;
  padding: 5px;
  justify-content: ${props => props.listingType === 'grid' ? '' : 'space-between'};
  
  & > div {
    align-self: center;
  }
`

const Actions = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: ${props => props.listingType === 'grid' ? 'space-between' : ''};
  
  & > span {
    cursor: pointer;
    padding: 5px;
  }
`

const Home = ({listings, listingType, addToWishlist, addToFav}) => <div>
  {listings.map((item, i) =>
    <Item key={`book-${i}`} listingType={listingType}>
      <div>{item.name}</div>
      <Actions listingType={listingType}>
        <span onClick={() => addToWishlist(item)}>+</span>
        <span onClick={() => addToFav(item)}>&lt;3</span>
      </Actions>
    </Item>
  )}
</div>

export default Home