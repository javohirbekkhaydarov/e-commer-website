import React from "react";
import styled from "styled-components";

const Error = () => {
  return (
      <Wrapper>

    <div className="section-center text-center error_section">
      <h2> Oops , wait for the products to arrive</h2>
    </div>
      </Wrapper>
  );
};
const Wrapper = styled.main`
  .error_section {
    height: 82.4vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;


export default Error;
