import React from 'react'
import styled from 'styled-components'

const Main = styled.main`
  margin-top: 16px;
`

const layout = props => (
  <>
    <div>Toolbar, Sidedrawer, Backdrop</div>
    <Main>{props.children}</Main>
  </>
)

export default layout
