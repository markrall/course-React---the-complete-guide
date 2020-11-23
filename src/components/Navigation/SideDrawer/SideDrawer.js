import React from 'react'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

import styled from 'styled-components'

const SideDrawer = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;

  @media (min-width: 500px) {
    display: none;
  }

  &.Open {
    transform: translateX(0);
  }

  &.Close {
    transform: translateX(-100%);
  }

  & .Logo {
    height: 8%;
    margin-bottom: 32px;
  }
`

const sideDrawer = props => {
  let attachedClasses = ['Close']
  if (props.open) {
    attachedClasses = ['Open']
  }
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <SideDrawer className={attachedClasses.join(' ')}>
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </SideDrawer>
    </>
  )
}

export default sideDrawer
