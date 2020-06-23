import React, { useEffect, useState } from 'react';
import moment from 'moment';
import useRelativeTime from './hooks/useRelativeTime';
import sorByDate from './util/sortByDate';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import Card from './components/Card';
import Filter from './components/Filter';
import GlobalStyle from './assets/styles/Global';

const App = () => {
  const [data, setData] = useState([]);

  function getDataProcessed(data) {
    return sorByDate(data).map((item) => {
      item.relativeTime = useRelativeTime(item.publishDate);
      item.active = item.relativeTime === '1d ago' || item.relativeTime.includes('h ago');
      return item;
    });
  }

  useEffect(() => {
    fetch('../db.json')
      .then((resp) => resp.json())
      .then((data) => {
        const today = moment().format('DD-MM-YYYY');
        console.log(today);
        data[0].publishDate = today;
        data[1].publishDate = today;
        setData(getDataProcessed(data));
      });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Filter />
      <CardContainer>
        {
          data && data.map((item) => (
            <Card
              active={item.active}
              key={item.id}
              {...item}
            />
          ))
        }
      </CardContainer>
    </>
  );
};

export default App;
