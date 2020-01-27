

export const addItemToCart = (cartItems, cartItemToAdd) => {
  // check if cartItemToAdd already exists
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

  if (existingCartItem) {
    /***
     * if already exists, find it in the cartItems using the id,
     * then modify it while increasing the it's quantity by 1
     * else, just add it to the cartItems
     */
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  /***
   * when cartItemToAdd doesn't exist, return an array containing the initial cart items
   * while adding a quantity property of 1 to newly added cart Item, this will add 
   * quantity to the every item added to cart
   */
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}


