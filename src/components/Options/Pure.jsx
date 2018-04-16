import React from 'react'
import styled from 'styled-components'

const Toggler = styled.span`
  cursor: pointer;
  margin: 0 5px;
`

const Options = ({toggleListView, toggleGridView}) => <span>
  <Toggler onClick={toggleListView}>List</Toggler>
  |
  <Toggler onClick={toggleGridView}>Grid</Toggler>
</span>

export default Options