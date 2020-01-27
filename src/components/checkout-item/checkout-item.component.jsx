import React from "react";

import {
  clearCartItem,
  removeItem,
  addItem
} from "../../redux/cart/cart.action";

import "./checkout-item.styles.scss";
import { connect } from "react-redux";

const CheckoutItem = ({ cartItem, clearCartItem, removeItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>

      <span className="name">{name} </span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>{" "}
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price} </span>

      <button className="remove-button" onClick={() => clearCartItem(cartItem)}>
        &#10005;
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearCartItem: item => dispatch(clearCartItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
