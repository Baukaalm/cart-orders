import React from "react";
import clsx from 'clsx';
import "./styles.css";
const Button = ({ children, type, handleClick, color, size, textTransform, className }) => {
  return (
    <button type={type} onClick={handleClick} className={clsx(`button --${color} --${size} --${textTransform}`, className)}>
      {children}
    </button>
  );
};

export default Button;
