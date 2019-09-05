import React from 'react';
import styled from 'styled-components';

// Components
import Title from './components/Title';
import PageWrapper from './components/PageWrapper';
import Loading from './components/Loading';

const StyledApp = styled.div`
  height: 100%;
  widht: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => (
  <PageWrapper>
    <StyledApp>
      <Loading isActive>
        <Title>Hello World <small>with loading</small></Title>
      </Loading>
    </StyledApp>
  </PageWrapper>
);

export default App;