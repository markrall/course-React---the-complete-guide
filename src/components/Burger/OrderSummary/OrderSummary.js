import React from 'react'

import Button from '../../UI/Button/Button'

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => (
    <li key={igKey}>
      <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
      {props.ingredients[igKey]}
    </li>
  ))
  return (
    <>
      <h3>Your Order</h3>
      <p>Delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Price:</strong> ${props.price.toFixed(2)}
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" onClick={props.cancelCheckout}>
        CANCEL
      </Button>
      <Button btnType="Success" onClick={props.continueCheckout}>
        CHECKOUT
      </Button>
    </>
  )
}

export default OrderSummary
