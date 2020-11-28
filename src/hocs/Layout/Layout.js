import React, { Component } from 'react'
import { connect } from 'react-redux'
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
        <Toolbar
          isAuth={this.props.isAuthenticated}
          open={this.sideDrawerOpenHandler}
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
          isAuth={this.props.isAuthenticated}
        />
        <Main>{this.props.children}</Main>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  }
}

export default connect(mapStateToProps)(Layout)
