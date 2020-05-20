import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { Products } from "../components/Products";
import { Subscription } from "../components/Subscription";

const Home = (props) => {
  const [state, setState] = useState({
    postcode: "",
    email: "",
  });
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Layout>
      <Hero handleZipCodeChange={handleChange} />
      <Products />
      <Subscription handleSubscriptionChange={handleChange} />
    </Layout>
  );
};

export default Home;
