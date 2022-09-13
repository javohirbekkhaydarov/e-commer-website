import React from "react";
import { Contact, Services } from "../components";
import FuturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FuturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
