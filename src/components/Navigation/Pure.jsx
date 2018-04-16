import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LinkItem = styled.li`
  padding: 5px;
  background-color: ${props => props.selected === props.label ? '#d5d5d5' : '#fff'}

  &:hover {
    background-color: #c5c5c5;
  }
`

const UnorderedList = styled.ul`
  & > a {
    text-decoration: none;
    color: #000;
  }
`

const Navigation = ({links, selected}) => <UnorderedList>
  {links.map((link, i) =>
    <Link key={`link-${i}`} to={link.linkTo}>
      <LinkItem selected={selected} label={link.linkTo}>{link.label}</LinkItem>
    </Link>)}
</UnorderedList>

export default Navigation