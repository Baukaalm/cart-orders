import React from "react";
import clsx from "clsx";
import "./styles.css";
const Link = ({ href, children, className }) => {
  return (
    <a className={clsx("link", className)} href={href}>
      {children}
    </a>
  );
};

export default Link;
