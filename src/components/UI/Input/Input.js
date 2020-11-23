import React from 'react'

import styled from 'styled-components'

const Input = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
  }

  & input {
    outline: none;
    border: 1px solid #ccc;
    background-color: white;
    font: inherit;
    padding: 6px 10px;
    display: block;
    width: 100%;
    box-sizing: border-box;

    &:focus {
      outline: none;
      background-color: #ccc;
    }
  }
`

const input = props => {
  let inputElement = null

  switch (props.elementType) {
    case 'input':
      inputElement = <input {...props.elementConfig} value={props.value} />
      break
    case 'textarea':
      inputElement = <textarea {...props.elementConfig} value={props.value} />
      break
    default:
      inputElement = <input {...props.elementConfig} value={props.value} />
  }
  return (
    <Input>
      <label>{props.label}</label>
      {inputElement}
    </Input>
  )
}

export default input
