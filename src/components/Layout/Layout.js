import React from "react";
import { Header } from "../Common/Header";
import { Footer } from "../Common/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
