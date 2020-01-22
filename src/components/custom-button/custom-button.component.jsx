import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  // children is the text typed within the CustomButton component
  // ...otherProps refers to other properties for the where the CustomButton is used
  // in a object using the rest operator
  <button
    className={` ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
