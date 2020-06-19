import moment from 'moment';

const sortByDate = (list) => {
  return list.sort((a, b) => moment(b.publishDate, 'DD-MM-YYYY').unix() - moment(a.publishDate, 'DD-MM-YYYY').unix());
};

export default sortByDate;
