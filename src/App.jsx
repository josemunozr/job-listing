import React from 'react';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import Card from './components/Card';
import GlobalStyle from './assets/styles/Global';

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <CardContainer>
      <Card active />
    </CardContainer>
  </>
);

export default App;
