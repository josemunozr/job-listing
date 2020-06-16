import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import Card from './components/Card';
import GlobalStyle from './assets/styles/Global';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('../db.json')
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <CardContainer>
        {
          data && data.map((item) => (
            <Card active key={item.id} {...item} />
          ))
        }
      </CardContainer>
    </>
  );
};

export default App;
