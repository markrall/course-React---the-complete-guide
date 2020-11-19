import React from 'react'

import styled, { css } from 'styled-components'

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }

  ${props => {
    let color = ''
    switch (props.btnType) {
      case 'Success':
        color = '#5c9210'
        break
      case 'Danger':
        color = '#944317'
        break
      default:
        break
    }

    return css`
      color: ${color};
    `
  }}
`

const button = props => (
  <Button btnType={props.btnType} onClick={props.onClick}>
    {props.children}
  </Button>
)

export default button
