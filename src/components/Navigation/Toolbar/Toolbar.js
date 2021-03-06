import React from 'react'

import styled from 'styled-components'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import HamburgerMenu from '../../UI/HamburgerMenu/HamburgerMenu'

const Toolbar = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;

  & .Logo {
    height: 80%;
  }

  & nav {
    height: 100%;
  }

  & .MenuHamburger {
    display: none;
  }

  @media (max-width: 499px) {
    .DesktopOnly {
      display: none;
    }
  }
`

const toolbar = props => (
  <Toolbar>
    <HamburgerMenu show={props.open} />
    <Logo />
    <nav className="DesktopOnly">
      <NavigationItems isAuth={props.isAuth} />
    </nav>
  </Toolbar>
)

export default toolbar
