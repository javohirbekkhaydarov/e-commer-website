import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import gif from "../assets/error.gif";
const ErrorPage = () => {
  return (
    <Wrapper className="page-100">
      <section id="section">
        <img src={gif} alt="" />
        <Link to="/" className="btn" id="btn">
          go home
        </Link>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  background: #f1f5f9;
  display: flex;
  justify-content: center;
  flex-driection: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  #section {
    display: flex;
    flex-direction: column;

    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
  #btn {
    margin-top: 2rem;

  }
`;
export default ErrorPage;
