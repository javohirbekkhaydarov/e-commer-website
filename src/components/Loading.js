import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <div className="center section-center loader_section">
        <div className="loading"></div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  .loader_section { 
    height: 82.4vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Loading;
