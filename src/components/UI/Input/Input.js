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

  & input,
  & select {
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

  & .Invalid {
    border: 1px solid red;
    background-color: salmon;
  }
`

const input = props => {
  let inputElement = null
  const inputClasses = []

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push('Invalid')
  }

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          {...props.elementConfig}
          className={inputClasses.join()}
          value={props.value}
          onChange={props.onChange}
        />
      )
      break
    case 'textarea':
      inputElement = (
        <textarea
          {...props.elementConfig}
          className={inputClasses.join()}
          value={props.value}
          onChange={props.onChange}
        />
      )
      break
    case 'select':
      inputElement = (
        <select
          className={inputClasses.join()}
          value={props.value}
          onChange={props.onChange}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      )
      break
    default:
      inputElement = (
        <input
          {...props.elementConfig}
          className={inputClasses.join()}
          value={props.value}
          onChange={props.onChange}
        />
      )
  }
  return (
    <Input className={inputClasses.join()}>
      <label>{props.label}</label>
      {inputElement}
    </Input>
  )
}

export default input
