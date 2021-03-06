import React from 'react'

import styled from 'styled-components'

import burgerLogo from '../../assets/images/burger-logo.png'

const Logo = styled.div`
  background-color: white;
  padding: 8px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;

  & img {
    height: 100%;
  }
`

const logo = props => (
  <Logo className="Logo">
    <img src={burgerLogo} alt="logo" />
  </Logo>
)

export default logo
