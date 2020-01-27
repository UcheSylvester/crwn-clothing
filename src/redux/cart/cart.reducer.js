import { CartActionTypes } from './cart.types'

import { addItemToCart, removeItemFromCart } from './cart.utils'

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // when cartIcon is clicked, if just toggles the hidden state
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    /***
     * When the action is ADD_ITEM (user clickes on the ADD TO CART button)
     *    we add the clicked item to our cartItems
     * 
     */
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }

    default:
      return state
  }
}

export default cartReducer 