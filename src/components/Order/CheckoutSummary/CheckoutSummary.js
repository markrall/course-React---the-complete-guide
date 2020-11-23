import React from 'react'

import styled from 'styled-components'

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

const CheckoutSummary = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;

  @media (min-width: 600px) {
    width: 500px;
  }
`

const checkoutSummary = props => {
  return (
    <CheckoutSummary>
      <h1>You're one step closer to the world's tastiest burger</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" onClick={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" onClick={props.checkoutContinued}>
        CONTINUE
      </Button>
    </CheckoutSummary>
  )
}

export default checkoutSummary
