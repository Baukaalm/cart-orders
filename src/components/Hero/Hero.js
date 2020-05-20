import React from "react";
import { Box } from "@material-ui/core";
import { LayoutCenterWrapper } from "../Common/LayoutCenterWrapper";
import { Title } from "../Common/Title";
import { Field } from "../Common/Field";

import "./styles.css";

const Hero = ({ handleZipCodeChange }) => {
  return (
    <div className="hero">
      <LayoutCenterWrapper>
        <Box pt={8}>
          <Title size="lg">
            Your Groceries Ready <br /> for Pick Up When <br /> You Want
          </Title>
          <Field
            placeholder="Enter ZIP Code"
            name="postcode"
            type="text"
            handleChange={handleZipCodeChange}
            className="hero__field"
            withButton
          />
        </Box>
      </LayoutCenterWrapper>
    </div>
  );
};

export default Hero;
