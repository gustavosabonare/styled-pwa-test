import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 5em;
  text-align: center;
  margin: 0;
`;

const Title = ({ children }) => (
  <StyledTitle>
    {children}
  </StyledTitle>
)

export default Title;