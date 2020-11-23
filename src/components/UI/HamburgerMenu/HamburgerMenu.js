import React from 'react'

import styled from 'styled-components'

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  color: white;
  width: 35px;
  height: 5px;
  background-color: white;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 35px;
    height: 5px;
    background-color: white;
  }

  &::before {
    top: -10px;
  }

  &::after {
    top: 10px;
  }

  @media (max-width: 499px) {
    display: block;
  }
`

const hamburgerMenu = props => {
  return <HamburgerMenu onClick={props.show} />
}

export default hamburgerMenu
