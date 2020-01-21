import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherProps }) => (
  // children is the text typed within the CustomButton component
  // ...otherProps refers to other properties for the where the CustomButton is used
  // in a object using the rest operator
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
