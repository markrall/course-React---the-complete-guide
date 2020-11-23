import React, { Component } from 'react'

import styled from 'styled-components'
import axios from '../../../axios-order'

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

const ContactDataStyles = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 500px;
  }
`

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your name',
        },
        value: '',
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your address',
        },
        value: '',
      },
      poatcode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your post code',
        },
        value: '',
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your country',
        },
        value: 'Australia',
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your email',
        },
        value: '',
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fatest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' },
          ],
        },
        value: '',
      },
    },
    loading: false,
  }

  orderHandler = event => {
    event.preventDefault()

    this.setState({ loading: true })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
    }
    console.log(order)

    axios
      .post('/orders.json', order)
      .then(res => {
        this.setState({ loading: false })
        this.props.history.push('/')
      })
      .catch(e => {
        this.setState({ loading: false })
      })
  }

  render() {
    let form = (
      <form>
        <Input elementType="..." elementConfig="..." value="..." />
        <Input
          inputtype="input"
          type="email"
          name="email"
          placeholder="Your email"
        />
        <Input
          inputtype="input"
          type="text"
          name="address"
          placeholder="Your address"
        />
        <Input
          inputtype="input"
          type="text"
          name="postcode"
          placeholder="Your postcode"
        />
        <Button btnType="Success" onClick={this.orderHandler}>
          ORDER
        </Button>
      </form>
    )
    if (this.state.loading) {
      form = <Spinner />
    }

    return (
      <ContactDataStyles>
        <h4>Enter your contact data</h4>
        {form}
      </ContactDataStyles>
    )
  }
}

export default ContactData
