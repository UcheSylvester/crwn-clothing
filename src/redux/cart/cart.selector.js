import { createSelector } from 'reselect'
/***
  Input selector take in the state, and return a slice of it
  they don't use the createSelector.
  just like here, selectCart takes state and returns the cart property
 */
const selectCart = state => state.cart;

/***
 * Output Selectors: takes the input selectors and returns values out of it
 * like here we take the selectCart (input selector) and returned the cartItems
 * thus memorizing it
 */
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

/**
 * Getting the cartItmesCount using a reducer
 */
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumulatedQauntity, item) => accumulatedQauntity + item.quantity,
    0
  )
)

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
)


