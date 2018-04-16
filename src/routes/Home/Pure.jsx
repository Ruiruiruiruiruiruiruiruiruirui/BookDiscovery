import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
  display: inline-block;
  width: 20%;
  margin: 1%;
  border: 1px solid black;
  padding: 5px;
`

const Actions = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  
  & > span {
    cursor: pointer;
    padding: 5px;
  }
`

const Home = ({listings}) => <div>
  {listings.map((item, i) =>
    <Item key={`book-${i}`}>
      <div>{item.name}</div>
      <Actions>
        <span>+</span>
        <span>&lt;3</span>
      </Actions>
    </Item>
  )}
</div>

export default Home