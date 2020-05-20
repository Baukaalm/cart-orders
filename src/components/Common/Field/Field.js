import React from "react";
import { Box } from "@material-ui/core";
import clsx from "clsx";
import { Button } from "../Button";
import "./styles.css";
const Field = ({
  name,
  type,
  handleChange,
  withButton,
  width,
  placeholder,
  className,
  ...props
}) => {
  if (withButton) {
    return (
      <Box display="flex">
        <input
          type={type}
          onChange={handleChange}
          placeholder={placeholder}
          className={clsx("input", className)}
          {...props}
        />
        <Button
          className="field__input"
          color="primary"
          size="sm"
          textTransform="uppercase"
        >
          go
        </Button>
      </Box>
    );
  }
  return (
    <input
      type={type}
      onChange={handleChange}
      placeholder={placeholder}
      className={clsx("input", className)}
      {...props}
    />
  );
};

export default Field;
