import React from "react";

import "./styles.css";

const Title = ({ children, size, color }) => {
  return <h2 className={`title --${size} --${color}`}>{children}</h2>;
};

export default Title;
