import React from "react";
import { Box } from "@material-ui/core";
import { Title } from "../Common/Title";

import "./styles.css";

const Product = ({ title, description, reverse, imgSrc }) => {
  if (reverse) {
    return (
      <Box display="flex" justifyContent="space-between" pt={8} pb={8} alignItems="center">
        <Box>
          <img alt="product" src={imgSrc} />
        </Box>
        <Box>
          <Title size="md">{title}</Title>
          <p className="poduct__description">{description}</p>
        </Box>
      </Box>
    );
  }
  return (
    <Box display="flex" justifyContent="space-between" pt={8} pb={8} alignItems="center">
      <Box>
        <Title size="md">{title}</Title>
        <p className="poduct__description">{description}</p>
      </Box>
      <Box>
        <img alt="product" src={imgSrc} />
      </Box>
    </Box>
  );
};

export default Product;
