import React from "react";
import { Box } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

import { LayoutCenterWrapper } from "../LayoutCenterWrapper";
import { Link } from "../Link";
import { AppleIcon, AndroidIcon } from "../Icons";
import "./styles.css";
const Footer = () => {
  return (
    <LayoutCenterWrapper>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={8}
        pb={4}
      >
        <Box>
          <p className="footer__title">sitename</p>
          <Link href="#" className="footer__link">
            Title One
          </Link>
          <Link href="#" className="footer__link">
            Title Two
          </Link>
          <Link href="#" className="footer__link">
            Title Three
          </Link>
          <Link href="#" className="footer__link">
            Title Four
          </Link>
          <Link href="#" className="footer__link">
            Title Five
          </Link>
        </Box>
        <Box>
          <p className="footer__title">information</p>

          <Link href="#" className="footer__link">
            Category One
          </Link>
          <Link href="#" className="footer__link">
            Category Two
          </Link>
          <Link href="#" className="footer__link">
            Category Three
          </Link>
          <Link href="#" className="footer__link">
            Category Four
          </Link>
          <Link href="#" className="footer__link">
            Category Five
          </Link>
        </Box>
        <Box>
          <p className="footer__title">category</p>

          <Link href="#" className="footer__link">
            Category One
          </Link>
          <Link href="#" className="footer__link">
            Category Two
          </Link>
          <Link href="#" className="footer__link">
            Category Three
          </Link>
          <Link href="#" className="footer__link">
            Category Four
          </Link>
          <Link href="#" className="footer__link">
            Category Five
          </Link>
        </Box>
        <Box>
          <p className="footer__title">contact</p>
          <Link className="footer__link" href="mailto:help@sitename.com">
            help@sitename.com
          </Link>
          <Link className="footer__link" href="tel:++00 123 123">
            Hotline: +00 123 123
          </Link>
        </Box>
        <Box>
          <Link><AppleIcon /></Link>
          <Box pt={1} />
          <Link><AndroidIcon /></Link>
          <Box display="flex">
            <Box p={1}>
              <FacebookIcon />
            </Box>
            <Box p={1}>
              <TwitterIcon />
            </Box>
            <Box p={1}>
              <LinkedInIcon />
            </Box>
            <br />
          </Box>
          <Box display="flex">
            <Box p={1}>
              <InstagramIcon />
            </Box>
            <Box p={1}>
              <YouTubeIcon />
            </Box>
          </Box>
        </Box>
      </Box>
    </LayoutCenterWrapper>
  );
};

export default Footer;
