import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import gif from "../assets/error.gif";
const ErrorPage = () => {
  return (
    <Wrapper className="page-100">
      <main id="section">
        <img id="errorImg" src={gif} alt="error page" />
        <Link to="/" className="btn" id="btn">
          back to home
        </Link>
      </main>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  background: #f1f5f9;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  @media (min-width: 0px) and (max-width: 776px) {
    #section {
      display: flex;
      flex-direction: column;
      width: 100%;
      #errorImg {
        width: 100%;
      }
    }
  }
`;
export default ErrorPage;
