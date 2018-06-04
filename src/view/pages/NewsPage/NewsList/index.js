import React from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';

const NewsList = ({ news }) => (
  news.map(newsRecord => (
    <NewsItem 
      key={newsRecord.id}
      {...newsRecord}
    />  
  ))    
);

NewsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string
  }))
};

export default NewsList;