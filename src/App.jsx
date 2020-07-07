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
  const [storeJobs, setStoreJobs] = useState([]);
  const [jobsList, setJobList] = useState([]);
  const [tagsList, setTagList] = useState([]);

  function getDataProcessed(data, tagList) {
    return sorByDate(data).map((item) => {
      item.tags = item.tags.map((tag) => tagList.filter((item) => item.code === tag)[0]);
      item.relativeTime = useRelativeTime(item.publishDate);
      item.active = item.relativeTime === '1d ago' || item.relativeTime.includes('h ago');
      return item;
    });
  }

  useEffect(() => {
    fetch('../db.json')
      .then((resp) => resp.json())
      .then((data) => {
        setTagList(data.TagsList);
        const today = moment().format('DD-MM-YYYY');
        data.JobsList[0].publishDate = today;
        data.JobsList[1].publishDate = today;
        const dataProcessed = getDataProcessed(data.JobsList, data.TagsList);
        setStoreJobs(dataProcessed);
        setJobList(dataProcessed);
      });
  }, []);

  function handleChangeFilter(tagsFiltered) {
    const listJobsFiltered = storeJobs.filter((job) => job.tags.some((item) => tagsFiltered.includes(item.code)));
    if (listJobsFiltered.length !== 0) {
      // listJobsFiltered = listJobsFiltered.map((job) => {
      //   job.tags = job.tags.map((tag) => {
      //     tag.filtered = true;
      //     return tag;
      //   });
      //   return job;
      // });
      // console.log(listJobsFiltered);
      setJobList(listJobsFiltered);
    } else {
      setJobList(storeJobs);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      {
        tagsList && tagsList.length !== 0 && (
          <Filter tagList={tagsList} handleChangeFilter={handleChangeFilter} />
        )
      }
      <CardContainer>
        {
          jobsList && jobsList.map((item) => (
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
