import React from 'react';
import './index.css';

function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

const Social = ({ label, link }) => (
    <a
        key={label}
        href={link}
        title={ucFirst(label)}
        target="_blank"
        className="social-item text-white bg-primary mx-1 d-inline-block text-center"
    >
      <i className={`fa fa-${label === 'web' ? 'globe' : label}`}/>
    </a>
);

Social.PropTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Social;