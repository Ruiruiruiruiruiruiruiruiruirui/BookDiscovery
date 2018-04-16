import React, { Component } from 'react'
import styled from 'styled-components'

import Navigation from './../Navigation'
import Options from './../Options'
import Search from './../Search'


const Header = styled.div`
  width: calc(100% - 20px);
  top: 0;
  height: 25px;
  background-color: #e5e5e5;
  padding: 10px;
  align-self: center;
`

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
`

const SideBar = styled.div`
  flex: 1;
  border: solid 1px black;
`

const Content = styled.div`
  flex: 5;
  border: solid 1px black;
`

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`

const Listings = styled.div`
  padding: 5px;
`

class AppLayout extends Component {
  componentDidMount() {
    this.props.updateBookList()
  }
  render() {
    const { links, children } = this.props

    return <div>
      <Header>Amazing Books</Header>
      <FlexContainer>
        <SideBar>
          <Navigation links={links}/>
        </SideBar>
        <Content>
          <OptionContainer>
            <Search />
            <Options />
          </OptionContainer>
          <Listings>
            {children}
          </Listings>
        </Content>
      </FlexContainer>
    </div>
  }
}

export default AppLayout