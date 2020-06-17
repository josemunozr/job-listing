import moment from 'moment';

const useRelativeTime = (date) => {
  const relativeTime = moment(date, 'DD-MM-YYYY').fromNow();
  const timeSplited = relativeTime.split(' ');
  const numberDay = timeSplited[0];
  const firstLetterRealitveTime = timeSplited[1].charAt(0);
  const ago = timeSplited[2];

  return `${numberDay}${firstLetterRealitveTime} ${ago}`;
};

export default useRelativeTime;
