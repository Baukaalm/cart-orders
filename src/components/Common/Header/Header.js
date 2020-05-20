import React from "react";
import { Box } from "@material-ui/core";
import { LayoutCenterWrapper } from "../LayoutCenterWrapper";
import { Logo } from "../Logo";
import { Button } from "../Button";
const Header = () => {
  return (
    <LayoutCenterWrapper>
      <Box display="flex" justifyContent="space-between" alignItems="center" pt={4} pb={4}>
        <Box>
          <Logo title="This is site logo" alt="logo" width="179" height="37" />
        </Box>
        <Box display="flex">
          <Box mr={2.5}>
            <Button color="primary" size="lg">
              Register
            </Button>
          </Box>
          <Box>
            <Button color="secondary" size="lg">
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </LayoutCenterWrapper>
  );
};

export default Header;
