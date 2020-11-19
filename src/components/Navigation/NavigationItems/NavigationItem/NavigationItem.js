import React from 'react'

import styled from 'styled-components'

const NavigationItem = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;

  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;
  }

  & a {
    color: #8f5c2c;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;

    @media (min-width: 500px) {
      color: white;
      height: 100%;
      padding: 16px 10px;
      border-bottom: 4px solid transparent;
    }
  }

  & a:hover,
  & a:active,
  & a.active {
    color: #40a4c8;

    @media (min-width: 500px) {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
      color: white;
    }
  }
`

const navigationItem = props => (
  <NavigationItem>
    <a href={props.link} className={props.active ? 'active' : null}>
      {props.children}
    </a>
  </NavigationItem>
)

export default navigationItem
