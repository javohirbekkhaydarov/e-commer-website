import React from "react";
import { Contact, Services } from "../components";
import FuturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const HomePage = () => {
  return (
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <main>
        <Hero />
        <FuturedProducts />
        <Services />
        <Contact />
      </main>
    </motion.div>
  );
};

export default HomePage;
