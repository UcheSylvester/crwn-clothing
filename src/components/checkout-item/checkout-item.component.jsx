import React from "react";

import { removeItem } from "../../redux/cart/cart.action";

import "./checkout-item.styles.scss";
import { connect } from "react-redux";

const CheckoutItem = ({ cartItem, removeCartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>

      <span className="name">{name} </span>
      <span className="quantity">{quantity} </span>
      <span className="price">{price} </span>

      <button
        className="remove-button"
        onClick={() => removeCartItem(cartItem)}
      >
        &#10005;
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeCartItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
