import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ news }) => (
  news.map(newsRecord => (
    <NewsItem 
      key={newsRecord.id}
      {...newsRecord}
    />  
  ))    
);

export default NewsList;