import React, { Component } from 'react'
import axios from '../../axios-order'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hocs/withErrorHandler/withErrorHandler'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.3,
  meat: 1.3,
  bacon: 0.7,
}
class BurgerBuilder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: null,
      totalPrice: 4,
      purchasable: false,
      purchasing: false,
      loading: false,
      error: false,
    }
  }

  componentDidMount() {
    axios
      .get('/ingredients.json')
      .then(res => {
        this.setState({ ingredients: res.data })
      })
      .catch(error => {
        this.setState({ error: true })
      })
  }

  updatePurchaseState(ingredients) {
    const sum = Object.values(ingredients).reduce((sum, el) => sum + el, 0)
    this.setState({ purchasable: sum > 0 })
  }

  addIngredientHandler = type => {
    const updatedIngredients = {
      ...this.state.ingredients,
      [type]: this.state.ingredients[type] + 1,
    }
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type]
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    this.updatePurchaseState(updatedIngredients)
  }

  removeIngredientHandler = type => {
    const ingredients = this.state.ingredients
    if (ingredients[type] <= 0) return
    const updatedIngredients = {
      ...ingredients,
      [type]: ingredients[type] - 1,
    }
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type]
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    this.updatePurchaseState(updatedIngredients)
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true })
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler = () => {
    const queryParams = []

    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURI(i) + '=' + encodeURI(this.state.ingredients[i])
      )
    }

    queryParams.push('price=' + this.state.totalPrice)
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryParams.join('&'),
    })
  }

  render() {
    const disabledInput = {
      ...this.state.ingredients,
    }
    for (let key in disabledInput) {
      disabledInput[key] = disabledInput[key] <= 0
    }

    let orderSummary = null
    let burger = this.state.error ? (
      <p>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    )

    if (this.state.ingredients) {
      burger = (
        <>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInput}
            price={this.state.totalPrice}
            ordered={this.purchaseHandler}
            purchasable={this.state.purchasable}
          />
        </>
      )
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          cancelCheckout={this.purchaseCancelHandler}
          continueCheckout={this.purchaseContinueHandler}
          price={this.state.totalPrice}
        />
      )
    }

    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
      <>
        <Modal show={this.state.purchasing} hide={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </>
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios)
