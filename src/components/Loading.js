import React from 'react';
import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from { width: 0%; };
  to { width: 100% };
`;

const StyledLoadingContainer = styled.span`
  position: relative;
`;
  
  const StyledLoading = styled.span`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2px;
  left: 0;
  background-color: red;
  animation: ${loading} 2s infinite ease-out;
`;

const Loading = ({ children, isActive }) => (
  <StyledLoadingContainer>
    {children}
    {isActive && <StyledLoading />}
  </StyledLoadingContainer>
);

export default Loading;