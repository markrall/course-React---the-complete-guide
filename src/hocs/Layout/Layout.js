import React, { Component } from 'react'
import styled from 'styled-components'

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

const Main = styled.main`
  margin-top: 72px;
`

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  sideDrawerOpenHandler = () => {
    this.setState({ showSideDrawer: true })
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }

  render() {
    return (
      <>
        <Toolbar open={this.sideDrawerOpenHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <Main>{this.props.children}</Main>
      </>
    )
  }
}

export default Layout
