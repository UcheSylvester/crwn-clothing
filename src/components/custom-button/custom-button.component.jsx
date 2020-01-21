import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherProps }) => {
  console.log(children, otherProps);
  return (
    <button className="custom-button" {...otherProps}>
      {otherProps.value}
    </button>
  );
};

export default CustomButton;
