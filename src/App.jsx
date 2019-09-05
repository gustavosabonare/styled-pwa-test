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

const StyledRedTitle = styled(Title)``;

const App = () => (
  <PageWrapper>
    <StyledApp>
      <Loading isActive>
        <StyledRedTitle>Hello World <small>with loading</small></StyledRedTitle>
      </Loading>
    </StyledApp>
  </PageWrapper>
);

export default App;