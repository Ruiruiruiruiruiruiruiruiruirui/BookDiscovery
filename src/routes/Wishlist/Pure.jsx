import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
  display: inline-block;
  width: 20%;
  margin: 1%;
  border: 1px solid black;
  padding: 5px;
`

const Wishlist = ({listings}) => <div>
  {listings.map((item, i) =>
    <Item key={`wish-${i}`}>
      <div>{item.name}</div>
    </Item>
  )}
</div>

export default Wishlist
