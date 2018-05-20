import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

const NewsItem = ({ title, text }) => (
  <Card className="my-3">
    <CardBody>
      <CardTitle>{ title }</CardTitle>
      <CardText>{ text }</CardText>
    </CardBody>
  </Card>
);

NewsItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};

export default NewsItem;