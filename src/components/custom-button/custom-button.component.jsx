import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => (
  // children is the text typed within the CustomButton component
  // ...otherProps refers to other properties for the where the CustomButton is used
  // in a object using the rest operator
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
