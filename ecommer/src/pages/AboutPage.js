import React from "react";
import PageHero from "../components/PageHero";
import aboutImg from "../assets/hero-bcg.jpeg";
import styled from "styled-components";
const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="about img" />
        <article>
          <div className="title">
            <h2> our Story</h2>
            <div className="underline"></div>
            <p>
              Furniture is a unique ecommerce design template that enables any
              seller to take their offline furniture business online with this
              professional looking design. Application is designed based on
              extensive UX Research, which helps you to boost conversion and
              engagement. This application is a best fit for anyone looking to
              launch their offline business online or planning a new ecommerce
              startup, helping you to reach a mass audience, increase revenue
              and build brands.
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
