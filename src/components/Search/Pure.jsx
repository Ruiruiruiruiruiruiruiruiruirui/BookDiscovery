import React from 'react'
import styled from 'styled-components'

const Search = ({updateFilter}) => <input type="text" onChange={(e) => updateFilter(e.currentTarget.value)}/>

export default Search