import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bg2 from "../assets/hero-bcg-2.jpeg";
import bg from "../assets/hero-bcg.jpeg";
import { motion, useViewportScroll } from "framer-motion";
const Hero = () => {
  const { scrollYProgress } = useViewportScroll();
  return (
    
    <Wrapper className="section-center">
      <motion.article
        className="content"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          Each of us has our own boundaries and comfort zones. Most of us don’t
          often step out of this, as we feel safe and secure in what we know.
          However, sometimes, the best personal and professional experiences we
          can have in our lives are when we completely step outside our comfort
          zone.
        </p>
        <Link to="/products">
          <motion.button
            className="btn btn-hero-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            shop now
          </motion.button>
        </Link>
      </motion.article>
      <article className="img-container">
        <img src={bg} alt="table" className="main-img" />
        <img src={bg2} alt="anicent" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
