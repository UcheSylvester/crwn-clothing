import React from "react";

import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.styles.scss";

const onToken = token => {
  console.log(token, "hello");
  alert("payment successful!");
};

const StripeCheckoutButton = ({ price }) => {
  const priceFroStripe = price * 100;
  const publishableKey = "pk_test_sEEJSW5SyjzZMbBg5dwRUnRB00ZM3isILo";

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total $${price}`}
      amount={priceFroStripe}
      token={onToken}
      stripeKey={publishableKey}
      panelLabel="Pay Now"
    />
  );
};

export default StripeCheckoutButton;
