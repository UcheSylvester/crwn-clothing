import React from "react";

import "./custom-icon.styles.scss";

const CustomIcon = ({ ...props }) => {
  console.log(props);
  return <img {...props} alt="" />;
};

export default CustomIcon;
