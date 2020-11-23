import React, { Component } from 'react'

import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
        {this.props.ingredients[igKey]}
      </li>
    ))

    return (
      <>
        <h3>Your Order</h3>
        <p>Delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Price:</strong> ${this.props.price.toFixed(2)}
        </p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" onClick={this.props.cancelCheckout}>
          CANCEL
        </Button>
        <Button btnType="Success" onClick={this.props.continueCheckout}>
          CHECKOUT
        </Button>
      </>
    )
  }
}

export default OrderSummary
