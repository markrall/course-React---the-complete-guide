import React from 'react'
import styled from 'styled-components'

import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const Main = styled.main`
  margin-top: 72px;
`

const layout = props => (
  <>
    <Toolbar />
    <SideDrawer />
    <Main>{props.children}</Main>
  </>
)

export default layout
