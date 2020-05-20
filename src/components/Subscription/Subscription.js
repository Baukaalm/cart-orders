import React from "react";
import { Box } from "@material-ui/core";
import { LayoutCenterWrapper } from "../Common/LayoutCenterWrapper";
import { Title } from "../Common/Title";
import { Field } from "../Common/Field";
import { Button } from "../Common/Button";

import "./styles.css";
const Subscription = ({ handleSubscriptionChange }) => {
  return (
    <LayoutCenterWrapper>
      <div className="subscription">
        <Box width="460px" margin="0 auto" pt={3.5}>
          <Box position="relative" zIndex="10">
            <Title color="white" size="md">
              Subscribe to our newsletter and <br /> receive exclusive offers
              every week
            </Title>

            <Box pt={1} display="flex" justifyContent="space-between">
              <Field
                handleChange={handleSubscriptionChange}
                className="subscription__field"
                name="email"
                placeholder="Enter your email"
              />
              <Button textTransform="uppercase" size="md" color="primary">
                subscribe
              </Button>
            </Box>
          </Box>
        </Box>
      </div>
    </LayoutCenterWrapper>
  );
};

export default Subscription;
