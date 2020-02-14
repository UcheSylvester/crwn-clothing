import React from "react";

import CartItem from "../cart-item/cart-item.component";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";
import CartDropdownContainer from "./cart-dropdown.container";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>

    <CustomButton
      onClick={e => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      Go to Checkout{" "}
    </CustomButton>
  </div>
);

// using container for CartDropdown
export default CartDropdownContainer(CartDropdown);
