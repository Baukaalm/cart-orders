import React from "react";
import { Box } from "@material-ui/core";
import { LayoutCenterWrapper } from "../Common/LayoutCenterWrapper";
import { Product } from ".";

import "./styles.css";

const Products = () => {
  return (
    <LayoutCenterWrapper>
      <Box pt={8} pb={8} pr={10} pl={10} className="products">
        <Product
          title="Buy Groceries"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          imgSrc="/images/product_cart.jpeg"
        />
        <Product
          title="Schedule"
          reverse
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          imgSrc="/images/product_clock.jpeg"
        />
        <Product
          title="Schedule"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          imgSrc="/images/product_phone.jpeg"
        />
      </Box>
    </LayoutCenterWrapper>
  );
};

export default Products;
