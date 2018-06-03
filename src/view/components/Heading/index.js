import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ text }) => (
  <h1 className="my-4 text-center">{ text }</h1>
);

Heading.propTypes = {
  text: PropTypes.string.isRequired
};

export default Heading;