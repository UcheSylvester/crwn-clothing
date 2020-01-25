import React from "react";
import { connect } from "react-redux";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";

import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>

    <CustomButton>Go to Checkout </CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
