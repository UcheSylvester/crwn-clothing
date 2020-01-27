import { CartActionTypes } from './cart.types'

// When a user clicked on the cartIcon, toggleCartHidden action is dispatched
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
})


// when user clicks on ADD ITEM TO CART button, addItem action is dispatched 
// with the clicked item as payload
export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

export const clearCartItem = (item) => ({
  type: CartActionTypes.CLEAR_CART_ITEM,
  payload: item
})